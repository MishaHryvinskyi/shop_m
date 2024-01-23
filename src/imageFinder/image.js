const form = document.querySelector(".search-form");
const searchBtn = document.querySelector(".js-button");

function imageFetch() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '35643945-433c06e40cd86730ec72beccd';

    const options = {
        params: {
          key: API_KEY, 
          q: "car",
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
        },
    };

    const url = `${BASE_URL}?key=${API_KEY}&q=${options.params.q}&image_type=${options.params.image_type}&orientation=${options.params.orientation}&safesearch=${options.params.safesearch}`;

    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`[ERROR ${response.status}] ${response.statusText}`);
            }
            return response.json();
        });
}

imageFetch()
    .then(data => console.log(data))
    .catch(error => console.error(error));