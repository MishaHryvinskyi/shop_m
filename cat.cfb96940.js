!function(){var n=document.querySelector(".root-cat"),t=document.querySelector(".target"),e=1,c=new IntersectionObserver((function(n,c){n.forEach((function(n){n.isIntersecting&&o(e+=1).then((function(n){list.insertAdjacentHTML("beforeend",r(n)),n.page===n.total_pages&&c.unobserve(t)})).catch((function(n){return console.log(n)}))}))}),{root:null,rootMargin:"300px",threshold:1});function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o="https://api.thecatapi.com/v1/images/search",i="live_1Vj7n5aJuf5yxdbAECUbqNw1q6zp3z4LY0EUuUZYfXCD687p6tfQtxYjFie5zZhD",a="".concat(o,"?limit=8&breed_ids=beng&api_key=").concat(i,"&page=").concat(e);return console.log(a),fetch(a).then((function(n){return n.json()})).then((function(e){n.insertAdjacentHTML("beforeend",r(e)),c.observe(t)})).catch((function(n){return console.log(n)}))}function r(n){return n.map((function(n){var t=n.url,e=n.breeds[0],c=e.name,o=e.id,r=e.origin,i=e.description;return'\n        <div class="cat-box" id="'.concat(o,'">\n            <h2>Cat breed: ').concat(c,"</h2>\n            <h3>Country of Origin: ").concat(r,'</h3>\n            <img class="cat__img" src="').concat(t,'" alt="').concat(c,'" width="300">\n            <p>').concat(i,"</p>\n        </div>\n    ")})).join("")}o()}();
//# sourceMappingURL=cat.cfb96940.js.map