var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire8b94;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequire8b94=n),n("9B8F0");var r=n("dEdDu"),s=n("l5ICX"),a=n("gNkcf"),i=n("UDlvM");document.querySelector(".js-search");const c=document.querySelector(".js-list");document.querySelector(".js-info");var l;const d=null!==(l=JSON.parse(localStorage.getItem(i.common.KEY_FAVORITE)))&&void 0!==l?l:[];var u;const f=null!==(u=JSON.parse(localStorage.getItem(i.common.KEY_BASKET)))&&void 0!==u?u:[];function g(e){const t=Number(e.closest(".js-card").dataset.id);return a.necklaces.find((({id:e})=>e===t))}(0,r.createMarkup)(a.necklaces,c),c.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){const t=g(e.target);(0,s.createModal)(t)}if(e.target.classList.contains("js-basket")){const t=g(e.target);if(f.some((({id:e})=>e===t.id)))return;f.push(t),localStorage.setItem(i.common.KEY_BASKET,JSON.stringify(f))}if(e.target.classList.contains("js-favorite")){const t=g(e.target);if(d.some((({id:e})=>e===t.id)))return;d.push(t),localStorage.setItem(i.common.KEY_FAVORITE,JSON.stringify(d))}}));
//# sourceMappingURL=index.f920e7ad.js.map
