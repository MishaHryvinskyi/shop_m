const box = document.querySelector(".root-cat");
const target = document.querySelector(".target");

let currentPage = 1;

let option = {
    root: null,
    rootMargin: "300px",
    threshold: 1,
};

let observer = new IntersectionObserver(onLoad, option);

function onLoad(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            currentPage += 1;
            fetchCat(currentPage)
            .then(data => {
                list.insertAdjacentHTML('beforeend', markup(data));
                if(data.page === data.total_pages) {
                    observer.unobserve(target);
                }
            })
            .catch((err) => console.log(err));
        }
    })
}

function fetchCat(page = 1) {
    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const API_KEY = "live_1Vj7n5aJuf5yxdbAECUbqNw1q6zp3z4LY0EUuUZYfXCD687p6tfQtxYjFie5zZhD";
    const url = `${BASE_URL}?limit=8&breed_ids=beng&api_key=${API_KEY}&page=${page}`;
    console.log(url)
    
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        box.insertAdjacentHTML('beforeend',  markup(data))
        observer.observe(target)
}).catch((err) => console.log(err));

}
fetchCat()

function markup(arr) {
    return arr.map(({ url, breeds }) => {
    const { name, id, origin, description } = breeds[0];

    return`
        <div class="cat-box" id="${id}">
            <h2>Cat breed: ${name}</h2>
            <h3>Country of Origin: ${origin}</h3>
            <img class="cat__img" src="${url}" alt="${name}" width="300">
            <p>${description}</p>
        </div>
    `}).join('')
}