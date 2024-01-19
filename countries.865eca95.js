document.querySelector(".me");(async function(){try{const e="https://restcountries.com/v3.1/name/",t=["Ukraine","France","Germany"].map((async t=>(await fetch(`${e}${t}`)).json()));return await Promise.allSettled(t)}catch(e){console.log(e)}})().then((e=>console.log(e))).catch((e=>console.log(e)));
//# sourceMappingURL=countries.865eca95.js.map
