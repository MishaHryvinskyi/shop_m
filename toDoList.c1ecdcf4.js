!function(){var e=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Stringify error",e.message)}},t=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Parse error",e.message)}},n="tasks",r=document.getElementById("myInput"),a=document.getElementById("myUL"),d=0;function o(e){var t=document.createElement("span"),n=document.createTextNode("×");t.className="close",t.appendChild(n),e.appendChild(t)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,r=document.createElement("li");r.textContent=e,r.dataset.id=n,t&&r.classList.add("checked"),a.appendChild(r),o(r)}function c(e,t){return{text:e,isDone:t,id:d}}var s=document.getElementById("myUL");document.getElementById("addBtn").addEventListener("click",(function(){var a=r.value.trim();r.value="",""!==a?(i(a),function(r){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t(n);if(void 0===o){var i=[c(r,a)];e(n,i)}else o.push(c(r,a)),e(n,o);d+=1}(a)):alert("Введіть текст!")})),s.addEventListener("click",(function(r){var a=r.target,d=t(n);if("LI"===a.nodeName){a.classList.toggle("checked");var o=d.findIndex((function(e){return Number(e.id)===Number(a.dataset.id)}));d[o].isDone=!d[o].isDone}else if(a.classList.contains("close")){a.parentNode.remove();var i=d.findIndex((function(e){return Number(e.id)===Number(a.parentNode.dataset.id)}));d.splice(i,1)}e(n,d)})),window.addEventListener("DOMContentLoaded",(function(){var e=t(n);void 0!==e&&e.forEach((function(e){return i(e.text,e.id,e.isDone)}))}))}();
//# sourceMappingURL=toDoList.c1ecdcf4.js.map
