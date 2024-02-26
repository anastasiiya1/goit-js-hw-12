import{a as p,S as y,i as l}from"./assets/vendor-64b55ca9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();const L="42469793-94d748bc29f10cf193212e81f",w="https://pixabay.com/api/?";async function b(t,o=1){try{const e=await p.get(w,{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});if(!e.data.hits)throw new Error("Failed to fetch images. Please try again later.");return o===1&&void 0,e.data}catch{throw new Error("Failed to fetch images. Please try again later.")}}const u=document.querySelector(".card-list"),S=document.querySelector(".loader"),E=new y(".card-item a",{captionsData:"alt",captionDelay:250});function P(t){if(!t.hits||t.hits.length===0)return l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});const o=q(t.hits);u.insertAdjacentHTML("beforeend",o),E.refresh()}function q(t){return t.map(({webformatURL:o,largeImageURL:e,tags:c,likes:r,views:i,comments:n,downloads:m})=>`<li class="card-item">
  <a href=${e}
    ><img src=${o} alt="${c}" height="200"/>
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
</li>`).join("")}function f(){console.log("toggleLoader"),S.classList.toggle("is-hidden")}const v=document.querySelector(".search-form"),d=document.getElementById("load-more-btn");let s=1,h,a;v.addEventListener("submit",$);d.addEventListener("click",M);d.classList.add("is-hidden");function C(){d.classList.toggle("is-hidden",u.children.length===0||u.children.length>=a)}async function M(){s+=1,await g(h,s),B()}async function g(t,o){try{f();const e=await b(t,o);(!e||!e.hits||e.hits.length===0)&&console.error("Error: No more images found for the current search."),a=e.totalHits,P(e),C(),H()&&l.info({message:"We're sorry, but you've reached the end of search results."})}catch(e){console.error("Error fetching images:",e),l.error({title:"Error",message:"An unexpected error occurred while fetching images. Please try again.",position:"center"})}finally{f()}}function $(t){t.preventDefault();const e=document.querySelector(".search-input").value.trim();if(e==="")return l.error({title:"Error",message:"Please enter a keyword before submitting the form.",position:"center"}),!1;u.innerHTML="",s=1,h=e,a=0,g(e,s)}function H(){return a<=s*15&&a!==0}function O(){const t=document.querySelector(".card-list li");return t?t.getBoundingClientRect().height:0}function B(){const t=O();t>0&&window.scrollBy(0,t*2)}
//# sourceMappingURL=commonHelpers.js.map
