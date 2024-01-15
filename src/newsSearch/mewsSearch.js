import { getNews } from "./api";
import { createMarkup } from "./markup";
import { refs } from "./refs";

refs.formNews.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { query } = form.elements;
    getNews(query.value)
    .then(({ articles }) => {
        // refs.listNews.innerHTML = createMarkup(data.articles)
        if(articles.length === 0) throw new Error("No data!");

        const markup = articles.reduce((markup, articles) => markup + createMarkup(articles), "");
        updateNewsList(markup);
    })
    .catch(onError)
    .finally(() => form.reset());
}

function onError(err) {
    console.error(err)
    updateNewsList("<p>Not found!</p>")
}

function updateNewsList(markup) {
    refs.listNews.innerHTML = markup
}

function onLoadMore(event) {

}