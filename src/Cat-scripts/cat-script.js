const box = document.querySelector(".root-cat");

function fetchCat() {
    const BASE_URL = "https://api.thecatapi.com/v1/images/search";
    const API_KEY = "live_1Vj7n5aJuf5yxdbAECUbqNw1q6zp3z4LY0EUuUZYfXCD687p6tfQtxYjFie5zZhD";
    const url = `${BASE_URL}?limit=20&breed_ids=beng&api_key=${API_KEY}`;
    console.log(url)
    
    return fetch(url)
    .then(response => response.json())
    .then(data => box.innerHTML = markup(data))

}
fetchCat()

function markup(arr) {
    return arr.map(({ height, url, width }) => `
        <div>
            <h2>${height}</h2>
            <img src="${url}" alt="${height}"
            <h3>${width}</h3>
        </div>
    `).join('')
}