!function(){function n(n){return fetch("".concat("https://newsapi.org/v2/everything","?apiKey=").concat("8ece45ab03a7434e9e4dffc54874f777","&q=").concat(n,"&pageSize=5")).then((function(n){return n.json()}))}function e(n){var e=n.author,t=n.title,r=n.description,o=n.url,c=n.urlToImage;return'\n    <li class="js-item-search">\n        <h2>'.concat(t,"</h2>\n        <h3>").concat(e||"No author!😕",'</h3>\n        <img \n            src="').concat(c||"https://ornament.name/pic/no_result.jpg",'"\n            alt="').concat(t,'" \n            width="550" \n        />\n        <p>').concat(r,'</p>\n        <a class="btn-s" href="').concat(o,'" target="_blank" rel="noreferrer noopener">Read more...</a>\n    </li>\n')}var t={listNews:document.querySelector(".js-list-search"),formNews:document.querySelector(".news-form"),loadMoreBtn:document.getElementById("loadBtn")};function r(n){console.error(n),o("<p>Not found!</p>")}function o(n){t.listNews.innerHTML=n}t.formNews.addEventListener("submit",(function(t){t.preventDefault();var c=t.currentTarget;n(c.elements.query.value).then((function(n){var t=n.articles;if(0===t.length)throw new Error("No data!");o(t.reduce((function(n,t){return n+e(t)}),""))})).catch(r).finally((function(){return c.reset()}))})),t.loadMoreBtn.addEventListener("click",(function(n){}))}();
//# sourceMappingURL=news.762e955f.js.map
