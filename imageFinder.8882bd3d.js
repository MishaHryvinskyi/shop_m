!function(){var t,e,a;document.querySelector(".search-form"),document.querySelector(".js-button");(t="35643945-433c06e40cd86730ec72beccd",e={params:{key:t,q:"car",image_type:"photo",orientation:"horizontal",safesearch:"true"}},a="".concat("https://pixabay.com/api/","?key=").concat(t,"&q=").concat(e.params.q,"&image_type=").concat(e.params.image_type,"&orientation=").concat(e.params.orientation,"&safesearch=").concat(e.params.safesearch),fetch(a,e).then((function(t){if(!t.ok)throw new Error("[ERROR ".concat(t.status,"] ").concat(t.statusText));return t.json()}))).then((function(t){return console.log(t)})).catch((function(t){return console.error(t)}))}();
//# sourceMappingURL=imageFinder.8882bd3d.js.map