function e(e){return fetch(`https://newsapi.org/v2/everything?apiKey=8ece45ab03a7434e9e4dffc54874f777&q=${e}&pageSize=5`).then((e=>{if(!e.ok)throw new Error(response.statusText);return e.json()}))}function n({author:e,title:n,description:t,url:r,urlToImage:o}){return`\n    <li class="js-item-search">\n        <h2>${n}</h2>\n        <h3>${e||"No author!😕"}</h3>\n        <img \n            src="${o||"https://ornament.name/pic/no_result.jpg"}"\n            alt="${n}" \n            width="550" \n        />\n        <p>${t}</p>\n        <a class="btn-s" href="${r}" target="_blank" rel="noreferrer noopener">Read more...</a>\n    </li>\n`}const t={listNews:document.querySelector(".js-list-search"),formNews:document.querySelector(".news-form"),loadMoreBtn:document.getElementById("loadBtn")};function r(e){console.error(e),o("<p>Not found!</p>")}function o(e){t.listNews.innerHTML=e}t.formNews.addEventListener("submit",(function(t){t.preventDefault();const s=t.currentTarget,{query:a}=s.elements;e(a.value).then((({articles:e})=>{if(0===e.length)throw new Error("No data!");o(e.reduce(((e,t)=>e+n(t)),""))})).catch(r).finally((()=>s.reset()))})),t.loadMoreBtn.addEventListener("click",(function(e){}));
//# sourceMappingURL=news.f6cdb74b.js.map
