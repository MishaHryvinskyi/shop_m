document.querySelector(".search-form"),document.querySelector(".js-button");(function(){const e="35643945-433c06e40cd86730ec72beccd",t={params:{key:e,q:"car",image_type:"photo",orientation:"horizontal",safesearch:"true"}},a=`https://pixabay.com/api/?key=${e}&q=${t.params.q}&image_type=${t.params.image_type}&orientation=${t.params.orientation}&safesearch=${t.params.safesearch}`;return fetch(a,t).then((e=>{if(!e.ok)throw new Error(`[ERROR ${e.status}] ${e.statusText}`);return e.json()}))})().then((e=>console.log(e))).catch((e=>console.error(e)));
//# sourceMappingURL=imageFinder.18112448.js.map
