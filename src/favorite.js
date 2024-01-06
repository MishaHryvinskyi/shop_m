import { common } from "./common";
import { createModal } from "./helpers/createModal";
import { necklaces } from './helpers/necklaces';

const list = document.querySelector('.js-list');
import { createMarkup } from "./helpers/createMarkup";

const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];


createMarkup(favorite, list);

list.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();
    if(event.target.classList.contains('js-info')) {
        const product = findProduct(event.target);
        createModal(product);
    }
}

function findProduct(elem) {
    const productId = Number(elem.closest(".js-card").dataset.id);
    return necklaces.find(({ id }) => id === productId);
}