// import { getNews } from "./NewsApiService";
import { refs } from "./refs";
import { createMarkup } from "./markup";
import NewsApiService from "./NewsApiService";
import LoadMoreBtn from "./components/LoadMoreBtn";

const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
    selector: "#loadBtn",
    isHidden: true,
});

refs.formNews.addEventListener('submit', onSubmit);
loadMoreBtn.button.addEventListener('click', fetchArticles);

function onSubmit(event) {
    event.preventDefault();
    loadMoreBtn.show();
    const form = event.currentTarget;
    newsApiService.query = form.elements.news.value;

    newsApiService.resetPage();
    clearNewsList();
    fetchArticles().catch(onError).finally(() => form.reset());
}

async function fetchArticles() {
    // loadMoreBtn.disable();
    // return getArticalsMarkup().then(markup => {
    //     updateNewsList(markup);
    //     loadMoreBtn.enable();
    // }).catch(onError);

    loadMoreBtn.disable();
    try{

        const markup = await getArticalsMarkup();
        updateNewsList(markup);
        loadMoreBtn.enable();

    } catch(error) {
        onError(error);
    }
   
}

async function getArticalsMarkup() {
    // return newsApiService.getNews()
    // .then(({ articles }) => {
    //     if(articles.length === 0) throw new Error("No data!");

    //     return articles.reduce(
    //     (markup, articles) => markup + createMarkup(articles), "");
    // });
    try {
        const { articles } = await newsApiService.getNews()
        if(articles.length === 0) throw new Error("No data!");
        return articles.reduce((markup, articles) => markup + createMarkup(articles), "");
    } catch(error) {
        onError(error);
    }

}

function onError(err) {
    console.error(err);
    loadMoreBtn.hide();
    clearNewsList();
    updateNewsList('<img src="https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg" alt="404">')
}

function updateNewsList(markup) {
    if(markup !== undefined)
    refs.listNews.insertAdjacentHTML('beforeend', markup);
}

function clearNewsList() {
    refs.listNews.innerHTML = "";
}