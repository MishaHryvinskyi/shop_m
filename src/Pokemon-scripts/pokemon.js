import Notiflix from 'notiflix';
import Handlebars from 'handlebars';
import { fetchPokemon } from './API-pokemon';
const container = document.querySelector(".js-container");
const form = document.querySelector(".js-form");

form.addEventListener("submit", onSubmit);

function onErrorFetch (err) {
    Notiflix.Notify.failure("Дідько!!! Не можу знайти такого покемона!! ☹")
}

function markupPokemon({
    name,
    weight,
    height,
    sprites: {
        front_default
    }
}) {
    const markup =  `
    <div>
        <img src="${front_default}" alt="${name}" height="300" />
        <div>
            <h2>Ім'я покемона: <b>${name}</b></h2>
            <p>Вага: ${weight}</p>
            <p>Ріст: ${height}</p>
        </div>
    </div>`

return Notiflix.Notify.success(container.innerHTML = markup);
}

function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const searchQuery = form.elements.query.value;

    fetchPokemon(searchQuery)
    .then(markupPokemon)
    .catch(onErrorFetch)
    .finally(() => form.reset());
}