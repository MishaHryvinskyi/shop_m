import *as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import { closeModal } from "./closeModal";

function createModal(product) {
    const instance = basicLightbox.create(`
    <div class="modal">
        <img class="item__img" src="${product.img}" alt="${product.name}" width="300" />
        <h2 class="modal__title">Намисто: ${product.name}</h2>
        <h4 class="modal__descr">${product.description}</h3>
        <h3 class="modal__price">Ціна: ${product.price} грн</h3>

        <div>
            <button class="btn js-favorite" type="button">Add to favorite</button>
            <button class="btn js-basket" type="button">Add to basket</button>
        </div>
    </div>
    `, {
        handler: null,
        onShow(instance) {
            this.handler = closeModal.bind(instance)
            document.addEventListener('keydown', this.handler)
        },

        onClose() {
            document.removeEventListener('keydown', this.handler)
        }
    });
    instance.show();
}

export { createModal }