import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";
import { createMarkup } from './helpers/createMarkup';

import { common } from './common';

const necklaces = [
    {
        id: 1,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416040585_2640462349454470_982056797546337860_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=jdbwxXEPbNQAX-2tuOA&_nc_ht=scontent.flwo4-2.fna&oh=00_AfAe11gkMZiH1ZcCFfK_Aj0QzjqHcyTHb19rjh5xNpjwBw&oe=659C6027",
        name: "СмакЖиття",
        price: 1500,
        description: "з коралу прес, шунгіту, агату , в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом"
    },
    {
        id: 2,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416019782_2639113262922712_6629642034451103777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uE-8QFdw5FUAX-bun0f&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBari3xyHZOBV1qKMr0yh9BVDofGLRg4e50SLCC06xcKQ&oe=659D5840",
        name: "СяйвоКохання",
        price: 3948,
        description: " із осяйних камінців нефриту, кварцу , агату, індійських намистин , з прекрасними, вишуканими, чудодійнимм, зґардовим латунними хрестами авторської роботи майстра, та із чорно- зеленими, вогняними бавовняними китичками, що регулюють любий розмір"
    },
    {
        id: 3,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/415982611_2640460122788026_1815652731527481878_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=yzOxmWlvwhgAX8UdZCo&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCW3PTSXnnNbsXS1jxM1wW7VMv0pqpuw8HxXiIcDFsg2w&oe=659D02E0",
        name: "ВолодаркаВсесвіту",
        price: 1299,
        description: "з малахіту, шунгіту, нефриту, в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом авторської ручної роботи майстра"
    },
    {
        id: 4,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/414905422_2638832919617413_8056003550864633094_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=P7zsLOzBu14AX_st2Ox&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBgx61FPKv8zStSQTWqOuh3vaLRdEmltalbPYCr9fbdXQ&oe=659C90F0",
        name: "БрунатоваПристрастьГуцульськогоКохання",
        price: 11049,
        description: "з натурального королівського гранованого нефриту, в обрамленні фурнітури античного золота і бронзи, із осяйним зґардовим латунним хрестом авторської ручної роботи майстра, та хрестами підвісами, на зав'язках з китицями що регулюють любий розмір"
    },
    {
        id: 5,
        img: "https://scontent.flwo4-1.fna.fbcdn.net/v/t39.30808-6/416000044_2640045256162846_5952609400053665581_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VaGUkeVxM3YAX9MHORa&_nc_ht=scontent.flwo4-1.fna&oh=00_AfD_MByjhLpIorknjuMnjMJJlE5HVmdKIbERByIfEpox9g&oe=659E0B86",
        name: "СмакЖиття",
        price: 897,
        description: "з коралу прес, шунгіту, агату , в обрамленні фурнітури античного золота і бронзи, зі зґардовим латунним хрестом авторської ручної роботи майстра"
    },
    {
        id: 6,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/415995704_2639878849512820_6383460341243582739_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6U_8d16hAKAAX-gtflL&_nc_ht=scontent.flwo4-2.fna&oh=00_AfCIpToaLKUb9w9aUOibhmCnLQFRV9IQWRoWpFAOZSXOug&oe=659D5817",
        name: "ДзвінкіПектораліГуіулії",
        price: 3699,
        description: "з натурального сучасного, королівського коралу, в обрамленні фурнітури античного срібла преміум класу ,із трьома старовинними Австрійськими срібними монетами найвищої проби , на шнурочках, із бавовняними вогняними китичками, що регулюють любий розмір"
    },
    {
        id: 7,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/416019782_2639113262922712_6629642034451103777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uE-8QFdw5FUAX-bun0f&_nc_ht=scontent.flwo4-2.fna&oh=00_AfBari3xyHZOBV1qKMr0yh9BVDofGLRg4e50SLCC06xcKQ&oe=659D5840",
        name: "СяйвоКохання",
        price: 1900,
        description: "із осяйних камінців нефриту, кварцу , агату, індійських намистин , з прекрасними, вишуканими, чудодійнимм, зґардовим латунними хрестами авторської роботи майстра, та із чорно- зеленими, вогняними бавовняними китичками, що регулюють любий розмір"
    },
    {
        id: 8,
        img: "https://scontent.flwo4-2.fna.fbcdn.net/v/t39.30808-6/414006886_2637343916432980_2884672095681505079_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=AVff8D8X61oAX8evmi3&_nc_ht=scontent.flwo4-2.fna&oh=00_AfAHks6RFdaLTaFvbMuVQs0pLC-bb-CLgJv2vbEd0oBB_Q&oe=659DC647",
        name: "СпадокГуцульщини",
        price: 10890,
        description: "з натурального сучасного, великого(30 мм #118мм, 25 мм #15 мм) королівського коралу, сучасної венеційки (50-60 рр.), сердліку 16 мм, Ніч Каїру авантюрин 18 мм, 12 мм, обрамленні фурнітури античного золота і бронзи преміум класу,із дивовижним латунним хрестом, авторської роботи майстра, на шнурочках, із бавовняними вогняними  китичками, що регулюють любий розмір"
    },
];

console.log(necklaces);

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
        `
        );
        instance.show();
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