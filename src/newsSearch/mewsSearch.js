import { getNews } from "./api";
import { createMarkup } from "./markup";
import { refs } from "./refs";

refs.formNews.addEventListener('submit', onSearch)

function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { query } = form.elements;
    getNews(query.value).then(data => {
        refs.listNews.innerHTML = createMarkup(data.articles)
    })
    .catch(onError).finally(() => form.reset());
}

function onError(err) {
    console.error(err)
}