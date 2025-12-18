import{S as b,N as y,P as w,a as L,R as $,s as E,b as S,c as q}from"./assets/vendor-DiZgXofU.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const h="https://paw-hut.b.goit.study";async function A(){return(await fetch(`${h}/api/categories`)).json()}async function k({page:e,limit:t}){const i=new URLSearchParams({page:e,limit:t}),s=await fetch(`${h}/api/animals?${i}`);if(!s.ok)throw new Error("API error");return s.json()}function j(e){return`
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
    `}function M(e=[]){return e.map(t=>{const i=t.categories.map(s=>`<span class="pet-tag">${s.name}</span>`).join("");return`
            <li class="pet-card" data-id="${t._id}">
            <img src="${t.image}" alt="${t.name}">

            <p class="pet-type">${t.species}</p>

            <h3 class="pet-name">${t.name}</h3>

            <div class="pet-tags">
                ${i}
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
        `}).join("")}function P(){new b(".about-swiper",{modules:[y,w],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:".about-pagination",clickable:!0}})}function B(){new Accordion(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",openMultiple:!1})}const O="https://paw-hut.b.goit.study/api";async function C(){try{const e=await fetch(`${O}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}async function H(){try{const e=await C();N(e.feedbacks),new b(".swiper-stories",{modules:[y,w],pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){L.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function N(e){const t=document.querySelector(".swiper-wrapper"),i=e.map(s=>`<li class="swiper-slide" id="${s._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${s.rate}"></div>
      <p class="stories-descr">${s.description}</p>
      <p class="stories-author">${s.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".stories-rate").forEach(s=>{new $(s,{readOnly:!0,score:Number(s.dataset.rate),half:!0,starOn:E,starOff:S,starHalf:q}).init()})}const o=document.querySelector(".mobile-menu"),R=document.querySelector(".burger-button"),T=document.querySelector(".close-button"),l=()=>{o.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};R.addEventListener("click",l);T.addEventListener("click",l);o.addEventListener("click",e=>{e.target===o&&l()});window.addEventListener("keydown",e=>{e.key==="Escape"&&o.classList.contains("is-open")&&l()});const v=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),p=document.querySelector(".js-load-more");let c=1,f="";const g=9;let a=[];_();async function _(){const e=await A();v.innerHTML=j(e),m(!0)}async function m(e=!1){try{const t=await k({page:c,limit:g});if(!Array.isArray(t.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}e?a=t.animals:a=[...a,...t.animals];let i=a;f&&(i=a.filter(s=>s.categories.some(r=>r.name===f))),d.innerHTML=M(i),c*g>=t.totalItems?p.style.display="none":p.style.display="block"}catch(t){console.error(t),d.innerHTML="<p>Помилка завантаження даних</p>"}}v.addEventListener("click",e=>{e.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(t=>t.classList.remove("active")),e.target.classList.add("active"),f=e.target.dataset.category,c=1,m(!0))});p.addEventListener("click",()=>{c+=1,m()});P();B();H();
//# sourceMappingURL=index.js.map
