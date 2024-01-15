const searchForm = document.querySelector(".js-form");
const list = document.querySelector(".js-list");

searchForm.addEventListener("submit", onSearch);


function getWeather(city, days) {

    const BASE_URL = 'https://api.weatherapi.com/v1';
    const API_KEY = 'c0dca8ed73ba444e8db231919241301';
    // const params = new URLSearchParams({
    //     key: API_KEY,
    //     q: city,
    //     days: days,
    //     lang: "uk"
    // })
    return fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`)
    .then(response => {
        if(!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json()
    });
};

function onSearch(event) {
    event.preventDefault();

    const { query, days } = event.currentTarget.elements;

    getWeather(query.value, days.value)
.then(data => list.innerHTML = createMarkup(data.forecast.forecastday))
.catch(err => console.log(err));

}

function createMarkup(arr) {

    return arr.map(({ date, day:{ avgtemp_c, condition: { icon, text } }, }) => `
        <li class="list__item-weather">
            <img src="${icon}" alt="${text}" />
            <p>${text}</p>
            <h2>${date}</h2>
            <h3>${avgtemp_c} ℃</h3>
        </li>
    `).join('');
}