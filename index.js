import{S as E,N as k,P as S,A as P,a as c,R as O,s as B,b as x,c as I}from"./assets/vendor-N5D8OynL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const q="https://paw-hut.b.goit.study";async function C(){return(await fetch(`${q}/api/categories`)).json()}async function N({page:e,limit:t}){const a=new URLSearchParams({page:e,limit:t}),s=await fetch(`${q}/api/animals?${a}`);if(!s.ok)throw new Error("API error");return s.json()}function T(e){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${e.map(({name:t})=>`
            <li>
            <button class="filter-btn" data-category="${t}">
                ${t}
            </button>
            </li>
        `).join("")}
    `}function H(e=[]){return e.map(t=>{const a=t.categories.map(s=>`<span class="pet-tag">${s.name}</span>`).join("");return`
            <li class="pet-card" data-id="${t._id}">
            <img src="${t.image}" alt="${t.name}">

            <p class="pet-type">${t.species}</p>

            <h3 class="pet-name">${t.name}</h3>

            <div class="pet-tags">
                ${a}
            </div>

            <p class="pet-meta">
                ${t.age} · ${t.gender}
            </p>

            <p class="pet-desc">
                ${t.shortDescription}
            </p>

            <button class="pet-btn" data-animal-id="${t._id}">
                Дізнатись більше
            </button>
            </li>
        `}).join("")}const m=document.querySelector("[data-modal-backdrop]"),A=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");function _(e){A.innerHTML=R(e),m.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",M)}function y(){m.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",M)}function M(e){e.key==="Escape"&&y()}m.addEventListener("click",e=>{e.target===m&&y()});function R(e){return`
    <div class="modal-body">
      <img src="${e.image}" alt="${e.name}" class="modal-img"/>

      <div class="modal-info">
        <p class="modal-category">${e.species}</p>
        <h2 class="modal-name">${e.name}</h2>
        <p class="modal-meta">${e.age} · ${e.sex}</p>

        <h3>Опис:</h3>
        <p>${e.description}</p>

        <h3>Здоровʼя:</h3>
        <p>${e.health}</p>

        <h3>Поведінка:</h3>
        <p>${e.behavior}</p>

        <button class="adopt-btn" data-adopt>
          Взяти додому
        </button>
      </div>
    </div>
  `}A.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){y();return}e.target.closest("[data-adopt]")&&(y(),openOrderModal(animal.id))});function F(){new E(".about-swiper",{modules:[k,S],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function D(){new P(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const U="https://paw-hut.b.goit.study/api";async function V(){try{const e=await fetch(`${U}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}async function J(){try{const e=await V();K(e.feedbacks),new E(".swiper-stories",{modules:[k,S],pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){c.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function K(e){const t=document.querySelector(".swiper-stories .swiper-wrapper"),a=e.map(s=>`<li class="swiper-slide" id="${s._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${s.rate}"></div>
      <p class="stories-descr">${s.description}</p>
      <p class="stories-author">${s.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",a),document.querySelectorAll(".stories-rate").forEach(s=>{new O(s,{readOnly:!0,score:Number(s.dataset.rate),half:!0,starOn:I,starOff:x,starHalf:B}).init()})}const z="https://paw-hut.b.goit.study/api",g=document.querySelector(".js-order-backdrop"),G=document.querySelector(".js-order-close"),v=document.querySelector(".js-order-form");let j=null;function b(){g.classList.remove("is-open"),document.body.classList.remove("modal-open"),j=null,v.classList.remove("was-submitted")}G.addEventListener("click",b);g.addEventListener("click",e=>{e.target===g&&b()});document.addEventListener("keydown",e=>{e.key==="Escape"&&g.classList.contains("is-open")&&b()});v.addEventListener("submit",async e=>{e.preventDefault(),v.classList.add("was-submitted");const{name:t,phone:a,comment:s}=e.target.elements,r={name:t.value.trim(),phone:a.value.trim(),comment:s.value.trim(),animalId:j};if(!r.animalId){c.fire({icon:"error",title:"Помилка",text:"Не вибрано тварину."});return}if(!r.name){c.fire({icon:"error",title:"Помилка",text:"Вкажіть ім'я."});return}if(!r.phone){c.fire({icon:"error",title:"Помилка",text:"Вкажіть номер телефону."});return}try{if(!(await fetch(`${z}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok)throw new Error("API error");c.fire({icon:"success",title:"Заявку надіслано",text:"Очікуйте на дзвінок 😊"}),e.target.reset(),b()}catch{c.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const l=document.querySelector(".mobile-menu"),L=document.querySelector(".burger-button"),$=document.querySelector(".close-button"),Q=document.querySelector(".menu-container");if(l&&L&&$){const e=()=>{l.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};L.addEventListener("click",e),$.addEventListener("click",e),Q.addEventListener("click",t=>{t.target.nodeName,e()}),l.addEventListener("click",t=>{t.target===l&&e()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&l.classList.contains("is-open")&&e()})}const w=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),f=document.querySelector(".js-load-more");if(w&&d&&f){let e=1,t="";const a=9;let s=[];r();async function r(){const o=await C();w.innerHTML=T(o),n(!0)}async function n(o=!1){try{const i=await N({page:e,limit:a});if(!Array.isArray(i.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}o?s=i.animals:s=[...s,...i.animals];let u=s;t&&(u=s.filter(p=>p.categories.some(h=>h.name===t))),d.innerHTML=H(u),e*a>=i.totalItems?f.style.display="none":f.style.display="block"}catch(i){console.error(i),d.innerHTML="<p>Помилка завантаження даних</p>"}}w.addEventListener("click",o=>{o.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(i=>i.classList.remove("active")),o.target.classList.add("active"),t=o.target.dataset.category,e=1,n(!0))}),f.addEventListener("click",()=>{e+=1,n()}),d.addEventListener("click",o=>{const i=o.target.closest(".pet-btn");if(!i)return;const u=i.dataset.animalId,p=s.find(h=>h._id===u);p&&_(p)})}F();D();J();
//# sourceMappingURL=index.js.map
