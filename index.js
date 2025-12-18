import"./assets/vendor-Ck3m8dQj.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const y="https://paw-hut.b.goit.study";async function L(){return(await fetch(`${y}/api/categories`)).json()}async function h({page:t,limit:e}){const o=new URLSearchParams({page:t,limit:e}),n=await fetch(`${y}/api/animals?${o}`);if(!n.ok)throw new Error("API error");return n.json()}function $(t){return`
        <li>
        <button class="filter-btn active" data-category="">
            Всі
        </button>
        </li>
        ${t.map(({name:e})=>`
            <li>
            <button class="filter-btn" data-category="${e}">
                ${e}
            </button>
            </li>
        `).join("")}
    `}function v(t=[]){return t.map(e=>{const o=e.categories.map(n=>`<span class="pet-tag">${n.name}</span>`).join("");return`
            <li class="pet-card" data-id="${e._id}">
            <img src="${e.image}" alt="${e.name}">

            <p class="pet-type">${e.species}</p>

            <h3 class="pet-name">${e.name}</h3>

            <div class="pet-tags">
                ${o}
            </div>

            <p class="pet-meta">
                ${e.age} · ${e.gender}
            </p>

            <p class="pet-desc">
                ${e.shortDescription}
            </p>

            <button class="pet-btn" data-animal-id="${e._id}">
                Дізнатись більше
            </button>
            </li>
        `}).join("")}const c=document.querySelector(".mobile-menu"),E=document.querySelector(".burger-button"),w=document.querySelector(".close-button"),l=()=>{c.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};E.addEventListener("click",l);w.addEventListener("click",l);c.addEventListener("click",t=>{t.target===c&&l()});window.addEventListener("keydown",t=>{t.key==="Escape"&&c.classList.contains("is-open")&&l()});const b=document.querySelector(".js-filters"),d=document.querySelector(".js-pets-list"),p=document.querySelector(".js-load-more");let a=1,f="";const g=9;let i=[];A();async function A(){const t=await L();b.innerHTML=$(t),m(!0)}async function m(t=!1){try{const e=await h({page:a,limit:g});if(!Array.isArray(e.animals)){d.innerHTML="<p>Нічого не знайдено</p>";return}t?i=e.animals:i=[...i,...e.animals];let o=i;f&&(o=i.filter(n=>n.categories.some(s=>s.name===f))),d.innerHTML=v(o),a*g>=e.totalItems?p.style.display="none":p.style.display="block"}catch(e){console.error(e),d.innerHTML="<p>Помилка завантаження даних</p>"}}b.addEventListener("click",t=>{t.target.classList.contains("filter-btn")&&(document.querySelectorAll(".filter-btn").forEach(e=>e.classList.remove("active")),t.target.classList.add("active"),f=t.target.dataset.category,a=1,m(!0))});p.addEventListener("click",()=>{a+=1,m()});
//# sourceMappingURL=index.js.map
