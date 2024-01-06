import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { necklaces } from './helpers/necklaces';

import { common } from './common';

const search = document.querySelector(".js-search");
const list = document.querySelector(".js-list");
const moreInfo = document.querySelector(".js-info");


const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(necklaces, list);
list.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.classList.contains("js-info")) {
        const product = findProduct(event.target);
        createModal(product)
    }
    if(event.target.classList.contains("js-basket")) {
        const product = findProduct(event.target);

        const inStorage = basketArr.some(({ id }) => id === product.id);

        if(inStorage) {
            return;
        }

        basketArr.push(product);
        localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
    }
    if(event.target.classList.contains("js-favorite")) {
        const product = findProduct(event.target);

        const inStorage = favoriteArr.some(({ id }) => id === product.id);

        if(inStorage) {
            return;
        }

        favoriteArr.push(product);
        localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
    }
}


function findProduct(elem) {
    const productId = Number(elem.closest(".js-card").dataset.id);
    return necklaces.find(({ id }) => id === productId);
}