import{a as p,S as y,i as s}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const L="42469793-94d748bc29f10cf193212e81f",w="https://pixabay.com/api/?";async function S(t,o=1){try{const e=await p.get(w,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});if(!e.data.hits)throw new Error("Failed to fetch images. Please try again later.");return o===1&&void 0,e.data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const u=document.querySelector(".card-list"),b=document.querySelector(".loader"),P=new y(".card-item a",{captionsData:"alt",captionDelay:250});function E(t){if(!t.hits)return s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});const o=q(t.hits);u.insertAdjacentHTML("beforeend",o),P.refresh()}function q(t){return t.map(({webformatURL:o,largeImageURL:e,tags:l,likes:r,views:i,comments:n,downloads:m})=>`<li class="card-item">
  <a href=${e}
    ><img src=${o} alt="${l}" height="200"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${r}</p>
      </li>
      <li>
        Views
        <p>${i}</p>
      </li>
      <li>
        Comments
        <p>${n}</p>
      </li>
      <li>
        Downloads
        <p>${m}</p>
      </li>
    </ul></a
  >
</li>`).join("")}function f(){console.log("toggleLoader"),b.classList.toggle("is-hidden")}const v=document.querySelector(".search-form"),d=document.getElementById("load-more-btn");let a=1,h,c;v.addEventListener("submit",$);d.addEventListener("click",M);d.classList.add("is-hidden");function C(){d.classList.toggle("is-hidden",u.children.length===0||u.children.length>=c)}async function M(){a+=1,await g(h,a),B()}async function g(t,o){try{f();const e=await S(t,o);(!e.hits||e.hits.length===0)&&s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),c=e.totalHits,E(e),C(),H()&&s.info({message:"We're sorry, but you've reached the end of search results."})}catch(e){console.error("Error fetching images:",e),s.error({title:"Error",message:"An unexpected error occurred while fetching images. Please try again.",position:"center"})}finally{f()}}function $(t){t.preventDefault();const e=document.querySelector(".search-input").value.trim();if(e==="")return s.error({title:"Error",message:"Please enter a keyword before submitting the form.",position:"center"}),!1;u.innerHTML="",a=1,h=e,c=0,g(e,a)}function H(){return c<=a*15&&c!==0}function O(){const t=document.querySelector(".card-list li");return t?t.getBoundingClientRect().height:0}function B(){const t=O();t>0&&window.scrollBy(0,t*2)}
//# sourceMappingURL=commonHelpers.js.map
