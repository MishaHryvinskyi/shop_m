// const BASE_URL = "https://newsapi.org/v2/everything";
// const API_KEY = "8ece45ab03a7434e9e4dffc54874f777";



// function getNews(query) {
//     return fetch(`${BASE_URL}?apiKey=${API_KEY}&q=${query}&pageSize=5`)
//     .then((data) => data.json());
// }

// export { getNews };

export default class NewsApiService {
    static ENDPOINT = "https://newsapi.org/v2/everything";
    static API_KEY = "8ece45ab03a7434e9e4dffc54874f777";
    constructor() {
        this.query = '';
        this.page = 1;
    }

    getNews() {
        const url = `${NewsApiService.ENDPOINT}?apiKey=${NewsApiService.API_KEY}&q=${this.query}&pageSize=5&page=${this.page}`;
        return fetch(url).then((data) => {
            this.incrementPage()
            return data.json();
        });
    }

    incrementPage() {
        this.page += 1;
    }
    resetPage() {
        this.page = 1;
    }
}