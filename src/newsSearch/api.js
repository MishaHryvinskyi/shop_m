const BASE_URL = "https://newsapi.org/v2/everything";
const API_KEY = "8ece45ab03a7434e9e4dffc54874f777";


function getNews(query) {
    return fetch(`${BASE_URL}?apiKey=${API_KEY}&q=${query}&pageSize=5`)
    .then(res =>{
        // if(!res.ok) {
        //     throw new Error(res.statusText);
        // }
        return res.json();
    })
   
}

export { getNews }