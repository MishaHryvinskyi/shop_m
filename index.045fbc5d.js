var n={};n=function n(t,e,o){function c(r,s){if(!e[r]){if(!t[r]){var a=void 0;if(!s&&a)return a(r,!0);if(i)return i(r,!0);var f=new Error("Cannot find module '"+r+"'");throw f.code="MODULE_NOT_FOUND",f}var l=e[r]={exports:{}};t[r][0].call(l.exports,(function(n){return c(t[r][1][n]||n)}),l,l.exports,n,t,e,o)}return e[r].exports}for(var i=void 0,r=0;r<o.length;r++)c(o[r]);return c}({1:[function(n,t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=n.trim(),!0===t?e.children:e.firstChild},c=function(n,t){var e=n.children;return 1===e.length&&e[0].tagName===t},i=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};e.visible=i,e.create=function(n,t){var e=function(n,t){var e=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=e.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return i.appendChild(n)}));var r=c(i,"IMG"),s=c(i,"VIDEO"),a=c(i,"IFRAME");return!0===r&&e.classList.add("basicLightbox--img"),!0===s&&e.classList.add("basicLightbox--video"),!0===a&&e.classList.add("basicLightbox--iframe"),e}(n=function(n){var t="string"==typeof n,e=n instanceof HTMLElement==1;if(!1===t&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(t)),r=function(n){return!1!==t.onClose(s)&&function(n,t){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(n)||n.parentElement.removeChild(n),t()}),410),!0}(e,(function(){if("function"==typeof n)return n(s)}))};!0===t.closable&&e.addEventListener("click",(function(n){n.target===e&&r()}));var s={element:function(){return e},visible:function(){return i(e)},show:function(n){return!1!==t.onShow(s)&&function(n,t){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),t()}))}),10),!0}(e,(function(){if("function"==typeof n)return n(s)}))},close:r};return s}},{}]},{},[1])(1);const t={KEY_BASKET:"basket",KEY_FAVORITE:"favorite"},e=[{id:1,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416040585_2640462349454470_982056797546337860_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=jdbwxXEPbNQAX-2tuOA&_nc_ht=scontent.flwo4-2.fna&oh=00_AfAe11gkMZiH1ZcCFfK_Aj0QzjqHcyTHb19rjh5xNpjwBw&oe=659C6027",name:"СмакЖиття",price:1500,description:"з коралу прес, шунгіту, агату , в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом"},{id:2,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416019782_2639113262922712_6629642034451103777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uE-8QFdw5FUAX-bun0f&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBari3xyHZOBV1qKMr0yh9BVDofGLRg4e50SLCC06xcKQ&oe=659D5840",name:"СяйвоКохання",price:3948,description:" із осяйних камінців нефриту, кварцу , агату, індійських намистин , з прекрасними, вишуканими, чудодійнимм, зґардовим латунними хрестами авторської роботи майстра, та із чорно- зеленими, вогняними бавовняними китичками, що регулюють любий розмір"},{id:3,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/415982611_2640460122788026_1815652731527481878_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=yzOxmWlvwhgAX8UdZCo&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCW3PTSXnnNbsXS1jxM1wW7VMv0pqpuw8HxXiIcDFsg2w&oe=659D02E0",name:"ВолодаркаВсесвіту",price:1299,description:"з малахіту, шунгіту, нефриту, в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом авторської ручної роботи майстра"},{id:4,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/414905422_2638832919617413_8056003550864633094_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P7zsLOzBu14AX_st2Ox&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBgx61FPKv8zStSQTWqOuh3vaLRdEmltalbPYCr9fbdXQ&oe=659C90F0",name:"БрунатоваПристрастьГуцульськогоКохання",price:11049,description:"з натурального королівського гранованого нефриту, в обрамленні фурнітури античного золота і бронзи, із осяйним зґардовим латунним хрестом авторської ручної роботи майстра, та хрестами підвісами, на зав'язках з китицями що регулюють любий розмір"},{id:5,img:"https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/416000044_2640045256162846_5952609400053665581_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VaGUkeVxM3YAX9MHORa&_nc_ht=scontent.flwo4-1.fna&oh=00_AfD_MByjhLpIorknjuMnjMJJlE5HVmdKIbERByIfEpox9g&oe=659E0B86",name:"СмакЖиття",price:897,description:"з коралу прес, шунгіту, агату , в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом авторської ручної роботи майстра"},{id:6,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/415995704_2639878849512820_6383460341243582739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6U_8d16hAKAAX-gtflL&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCIpToaLKUb9w9aUOibhmCnLQFRV9IQWRoWpFAOZSXOug&oe=659D5817",name:"ДзвінкіПектораліГуіулії",price:3699,description:"з натурального сучасного, королівського коралу, в обрамленні фурнітури античного срібла преміум класу ,із трьома старовинними Австрійськими срібними монетами найвищої проби , на шнурочках, із бавовняними вогняними китичками, що регулюють любий розмір"},{id:7,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416019782_2639113262922712_6629642034451103777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uE-8QFdw5FUAX-bun0f&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBari3xyHZOBV1qKMr0yh9BVDofGLRg4e50SLCC06xcKQ&oe=659D5840",name:"СяйвоКохання",price:1900,description:"із осяйних камінців нефриту, кварцу , агату, індійських намистин , з прекрасними, вишуканими, чудодійнимм, зґардовим латунними хрестами авторської роботи майстра, та із чорно- зеленими, вогняними бавовняними китичками, що регулюють любий розмір"},{id:8,img:"https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/414006886_2637343916432980_2884672095681505079_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=AVff8D8X61oAX8evmi3&_nc_ht=scontent.flwo4-2.fna&oh=00_AfAHks6RFdaLTaFvbMuVQs0pLC-bb-CLgJv2vbEd0oBB_Q&oe=659DC647",name:"СпадокГуцульщини",price:10890,description:"з натурального сучасного, великого(30 мм #118мм, 25 мм #15 мм) королівського коралу, сучасної венеційки (50-60 рр.), сердліку 16 мм, Ніч Каїру авантюрин 18 мм, 12 мм, обрамленні фурнітури античного золота і бронзи преміум класу,із дивовижним латунним хрестом, авторської роботи майстра, на шнурочках, із бавовняними вогняними  китичками, що регулюють любий розмір"}];console.log(e);document.querySelector(".js-search");const o=document.querySelector(".js-list");document.querySelector(".js-info");var c;const i=null!==(c=JSON.parse(localStorage.getItem(t.KEY_FAVORITE)))&&void 0!==c?c:[];var r;const s=null!==(r=JSON.parse(localStorage.getItem(t.KEY_BASKET)))&&void 0!==r?r:[];function a(n){const t=Number(n.closest(".js-card").dataset.id);return e.find((({id:n})=>n===t))}!function(n,t){let e;e=n.length?n.map((({name:n,img:t,id:e})=>`\n            <li data-id="${e}" class="item js-card">\n                <img class="item__img" src="${t}" alt="${n}" width="250" />\n                <h2 class="item__name">Намисто: ${n}</h2>\n                <p>\n                    <a class="js-info" href="#">More information</a>\n                </p>\n                <div>\n                    <button class="btn js-favorite" type="button">Add to favorite</button>\n                    <button class="btn js-basket" type="button">Add to basket</button>\n                </div>\n            </li>`)).join(""):'\n    <li>\n        <img src="https://kurtrees.files.wordpress.com/2013/04/black-and-white-empty-empty-heart-heart-favim-com-501667.jpg" alt="404" width="600" />\n    </li>',t.innerHTML=e}(e,o),o.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){const t=a(e.target);n.create(`\n        <div class="modal">\n            <img class="item__img" src="${t.img}" alt="${t.name}" width="300" />\n            <h2 class="modal__title">Намисто: ${t.name}</h2>\n            <h4 class="modal__descr">${t.description}</h3>\n            <h3 class="modal__price">Ціна: ${t.price} грн</h3>\n\n            <div>\n                <button class="btn js-favorite" type="button">Add to favorite</button>\n                <button class="btn js-basket" type="button">Add to basket</button>\n            </div>\n        </div>\n        `).show()}if(e.target.classList.contains("js-basket")){const n=a(e.target);if(s.some((({id:t})=>t===n.id)))return;s.push(n),localStorage.setItem(t.KEY_BASKET,JSON.stringify(s))}if(e.target.classList.contains("js-favorite")){const n=a(e.target);if(i.some((({id:t})=>t===n.id)))return;i.push(n),localStorage.setItem(t.KEY_FAVORITE,JSON.stringify(i))}}));
//# sourceMappingURL=index.045fbc5d.js.map