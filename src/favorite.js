import { common } from "./common";

const list = document.querySelector('.js-list');
import { createMarkup } from "./helpers/createMarkup";

const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);