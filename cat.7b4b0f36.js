const n=document.querySelector(".root-cat");!function(){const t="https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_1Vj7n5aJuf5yxdbAECUbqNw1q6zp3z4LY0EUuUZYfXCD687p6tfQtxYjFie5zZhD";console.log(t),fetch(t).then((n=>n.json())).then((t=>n.innerHTML=t.map((({height:n,url:t,width:e})=>`\n        <div>\n            <h2>${n}</h2>\n            <img src="${t}" alt="${n}"\n            <h3>${e}</h3>\n        </div>\n    `)).join("")))}();
//# sourceMappingURL=cat.7b4b0f36.js.map
