import{S as c,a as b,N as C,P as $,A,R as M}from"./assets/vendor-BPMsKYsD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const k="https://paw-hut.b.goit.study";async function x(){return(await fetch(`${k}/api/categories`)).json()}async function P({page:e,limit:t}){const i=new URLSearchParams({page:e,limit:t}),r=await fetch(`${k}/api/animals?${i}`);if(!r.ok)throw new Error("API error");return r.json()}function j(e){return`
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
    `}function B(e=[]){return e.map(t=>{const i=t.categories.map(r=>`<span class="pet-tag">${r.name}</span>`).join("");return`
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
        `}).join("")}const O="https://paw-hut.b.goit.study/api",d=document.querySelector(".js-order-backdrop"),_=document.querySelector(".js-order-close"),y=document.querySelector(".js-order-form");let v=null;function I(e){v=e,d.classList.add("is-open"),document.body.classList.add("modal-open")}function L(){d.classList.remove("is-open"),document.body.classList.remove("modal-open"),v=null,y.classList.remove("was-submitted")}_.addEventListener("click",L);d.addEventListener("click",e=>{e.target===d&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.contains("is-open")&&L()});y.addEventListener("submit",async e=>{e.preventDefault(),y.classList.add("was-submitted");const{name:t,phone:i,comment:r}=e.target.elements,n=i.value.replace(/\D/g,""),s={name:t.value.trim(),phone:n,comment:r.value.trim(),animalId:v};if(!s.animalId){c.fire({icon:"error",title:"Помилка",text:"Не вибрано тварину."});return}if(!s.name){c.fire({icon:"error",title:"Помилка",text:"Вкажіть ім'я."});return}if(!s.phone){c.fire({icon:"error",title:"Помилка",text:"Вкажіть номер телефону."});return}if(s.phone.length!==12){c.fire({icon:"error",title:"Помилка",text:"Невірний номер телефону."});return}if(!s.comment){c.fire({icon:"error",title:"Помилка",text:"Додайте коментар."});return}try{if(!(await fetch(`${O}/orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok)throw new Error("API error");c.fire({icon:"success",title:"Заявку надіслано",text:"Очікуйте на дзвінок 😊"}),e.target.reset(),L()}catch{c.fire({icon:"error",title:"Помилка",text:"Не вдалося відправити заявку. Спробуйте ще раз."})}});const m=document.querySelector("[data-modal-backdrop]"),E=document.querySelector("[data-modal-content]");document.querySelector("[data-modal-close]");let S=null;function H(e){S=e,E.innerHTML=N(e),m.classList.remove("is-hidden"),document.body.classList.add("no-scroll"),window.addEventListener("keydown",q)}function g(){m.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),window.removeEventListener("keydown",q)}function q(e){e.key==="Escape"&&g()}m.addEventListener("click",e=>{e.target===m&&g()});function N(e){return`
    <div class="modal-body">
      <img src="${e.image}" alt="${e.name}" class="modal-img"/>

      <div class="modal-info">
        <p class="modal-category">${e.species}</p>
        <h2 class="modal-name">${e.name}</h2>
        <p class="modal-meta">${e.age} · ${e.gender}</p>

        <h3>Опис:</h3>
        <p>${e.description}</p>

        <h3>Здоровʼя:</h3>
        <p>${e.healthStatus}</p>

        <h3>Поведінка:</h3>
        <p>${e.behavior}</p>

        <button class="adopt-btn" data-adopt>
          Взяти додому
        </button>
      </div>
    </div>
  `}E.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]")){g();return}e.target.closest("[data-adopt]")&&(g(),I(S._id))});function T(){new b(".about-swiper",{modules:[C,$],slidesPerView:1,spaceBetween:20,navigation:{nextEl:".about-btn-next",prevEl:".about-btn-prev",disabledClass:"is-disabled"},pagination:{el:document.querySelector(".why-paws-controls .swiper-pagination"),clickable:!0}})}function R(){document.querySelector(".faq")&&new A(".faq",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-answer",activeClass:"active",openOnInit:[],collapse:!0,showMultiple:!1})}const U="https://paw-hut.b.goit.study/api";async function D(){try{const e=await fetch(`${U}/feedbacks`);if(!e.ok)throw new Error(`Помилка: ${e.status}`);return await e.json()}catch(e){throw console.error("Помилка отримання відгуків:",e),e}}const F="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.0709%203.61234C11.4146%202.79588%2012.5854%202.79589%2012.9291%203.61235L14.9579%208.43123C15.1029%208.77543%2015.4306%209.01061%2015.8067%209.0404L21.0727%209.45748C21.9649%209.52814%2022.3267%2010.6281%2021.6469%2011.2034L17.6348%2014.5987C17.3482%2014.8412%2017.223%2015.2218%2017.3106%2015.5843L18.5363%2020.661C18.744%2021.5211%2017.7969%2022.201%2017.033%2021.7401L12.5245%2019.0196C12.2025%2018.8252%2011.7975%2018.8252%2011.4755%2019.0196L6.96699%2021.7401C6.20311%2022.201%205.25596%2021.5211%205.46363%2020.661L6.68942%2015.5843C6.77698%2015.2218%206.65182%2014.8412%206.36526%2014.5987L2.35306%2011.2034C1.67328%2010.6281%202.03507%209.52814%202.92729%209.45748L8.19336%209.0404C8.5695%209.01061%208.89716%208.77543%209.04207%208.43123L11.0709%203.61234Z'%20fill='%2302060A'/%3e%3c/svg%3e",Z="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.0078%204.00098L14.0361%208.81934C14.328%209.51225%2014.9837%209.97813%2015.7275%2010.0371L20.9854%2010.4531L16.9893%2013.835H16.9883C16.4157%2014.3197%2016.1618%2015.086%2016.3389%2015.8193L17.5615%2020.8848C17.5599%2020.8857%2017.5589%2020.8872%2017.5576%2020.8877C17.5559%2020.8869%2017.5532%2020.8858%2017.5498%2020.8838L13.041%2018.1631C12.4014%2017.7772%2011.5986%2017.7772%2010.959%2018.1631L6.4502%2020.8838C6.44677%2020.8858%206.4441%2020.8869%206.44238%2020.8877C6.44085%2020.8871%206.43936%2020.8859%206.4375%2020.8848L7.66113%2015.8193C7.8271%2015.1321%207.61431%2014.416%207.11523%2013.9297L7.01172%2013.835L3.01367%2010.4531L8.27246%2010.0371C9.01627%209.97814%209.67205%209.51246%209.96387%208.81934L11.9912%204.00098C11.9936%204.00054%2011.9966%204%2012%204C12.003%204%2012.0056%204.00062%2012.0078%204.00098Z'%20stroke='%2302060A'%20stroke-width='2'/%3e%3c/svg%3e",G="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5312%203.80664C11.7032%203.39816%2012.2968%203.39816%2012.4688%203.80664L14.4971%208.625C14.7155%209.14358%2015.2076%209.49471%2015.7676%209.53906L21.0332%209.95605C21.4909%209.99232%2021.6545%2010.5412%2021.3242%2010.8213L17.3115%2014.2168C16.8819%2014.5804%2016.6919%2015.1542%2016.8242%2015.7021L18.0508%2020.7783C18.1502%2021.1902%2017.6892%2021.5518%2017.291%2021.3115H17.29L12.7832%2018.5918C12.3023%2018.3016%2011.6977%2018.3016%2011.2168%2018.5918L6.70898%2021.3115C6.31078%2021.5518%205.84983%2021.1902%205.94922%2020.7783L7.17578%2015.7021C7.30809%2015.1543%207.11814%2014.5805%206.68848%2014.2168L2.67578%2010.8213C2.34544%2010.5412%202.5091%209.99231%202.9668%209.95605L8.23242%209.53906C8.79243%209.49471%209.28456%209.14369%209.50293%208.625L11.5312%203.80664Z'%20fill='url(%23paint0_linear_8242_16266)'%20stroke='%2302060A'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_8242_16266'%20x1='2'%20y1='12.3716'%20x2='22'%20y2='12.3716'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'/%3e%3cstop%20offset='0.5'%20stop-color='%2302060A'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";async function V(){try{const e=await D();z(e.feedbacks),new b(".swiper-stories",{modules:[C,$],pagination:{el:document.querySelector(".stories-controls .swiper-pagination"),dynamicBullets:!0,clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:32}}})}catch(e){c.fire({position:"top-end",icon:"error",title:`Помилка отримання відгуків: ${e}`,showConfirmButton:!1,timer:1500})}}function z(e){const t=document.querySelector(".swiper-stories .swiper-wrapper"),i=e.map(r=>`<li class="swiper-slide" id="${r._id}">       
      <div class="story-card">
      <div class="stories-rate" data-rate="${r.rate}"></div>
      <p class="stories-descr">${r.description}</p>
      <p class="stories-author">${r.author}</p></div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",i),document.querySelectorAll(".stories-rate").forEach(r=>{new M(r,{readOnly:!0,score:Number(r.dataset.rate),half:!0,starOn:F,starOff:Z,starHalf:G}).init()})}function J(){const e=document.querySelector(".mobile-menu"),t=document.querySelector(".burger-button"),i=document.querySelector(".close-button"),r=document.querySelector(".menu-container");if(e&&t&&i){const n=()=>{e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",n),i.addEventListener("click",n),r.addEventListener("click",s=>{const o=s.target.closest("a"),a=s.target.closest(".menu-take-div");(o||a)&&n()}),e.addEventListener("click",s=>{s.target===e&&n()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&e.classList.contains("is-open")&&n()})}}const w=document.querySelector(".js-filters"),l=document.querySelector(".js-pets-list"),f=document.querySelector(".js-load-more");if(w&&l&&f){let e=1,t="";const i=9;let r=[];n();async function n(){const o=await x();w.innerHTML=j(o),s(!0)}async function s(o=!1){try{const a=await P({page:e,limit:i});if(!Array.isArray(a.animals)){l.innerHTML="<p>Нічого не знайдено</p>";return}o?r=a.animals:r=[...r,...a.animals];let u=r;t&&(u=r.filter(p=>p.categories.some(h=>h.name===t))),l.innerHTML=B(u),e*i>=a.totalItems?f.style.display="none":f.style.display="block"}catch(a){console.error(a),l.innerHTML="<p>Помилка завантаження даних</p>"}}w.addEventListener("click",o=>{o.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(a=>a.classList.remove("active")),o.target.classList.add("active"),t=o.target.dataset.category,e=1,s(!0))}),f.addEventListener("click",()=>{e+=1,s()}),l.addEventListener("click",o=>{const a=o.target.closest(".pet-btn");if(!a)return;const u=a.dataset.animalId,p=r.find(h=>h._id===u);p&&H(p)})}T();R();V();J();
//# sourceMappingURL=index.js.map
