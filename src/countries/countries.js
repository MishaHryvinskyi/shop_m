// async function getCapital() {
//     const URL = 'https://restcountries.com/v3.1/name/';
//     const response = await fetch(`${URL}Ukraine`);
//     return  response.json();
// }

// getCapital()
// .then(data => {
//     list.innerHTML = markupCountrie(data.results)
// })
// .catch(err => console.log(err));

// function markupCountrie(name) {
//     return markup = `<div>
//         <h2>Name: ${name.common.ukr}</h2>
//         <h3>Population: ${name.population}</h3>
//         <div>
//             <img src="${name.coatOfArms.png}" alt="gerb"  width="50"/>
//             <img src="${name.flags.svg}" alt="flag"  width="50"/>
//         </div>
//     </div>`
// }

// async function getCapital() {
//     try{
//         const URL = 'https://restcountries.com/v3.1/name/';
//         const arr = ['Ukraine', 'France', 'Germany'];
    
//         const response = arr.map(async(ctr) => {
//             const res =  await fetch(`${URL}${ctr}`);
//             return res.json();
//         })
    
//         const promis = await Promise.allSettled(response);
//         return promis;
//     } catch(e) {
//         console.log(e);
//     }
// }

// getCapital()
// .then(data => console.log(data))
// .catch(e => console.log(e));

const list = document.querySelector(".js-list");
const searchForm = document.querySelector(".js-search");
const addCountry = document.querySelector(".js-add");
const formContainer = document.querySelector(".js-form-container");

addCountry.addEventListener('click', handlerAddInput);
searchForm.addEventListener('submit', handlerForm)

function handlerAddInput() {
    const markup = `<input type="text" name="country">`;
    formContainer.insertAdjacentHTML('beforeend', markup);
}

function handlerForm(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const arr = data.getAll('country').filter(item => item).map(item => item.trim());
    getCountries(arr)
    .then(async resp => {
        const capitals = resp.map(({ capital }) => capital[0])
        const weatherService = await getWeather(capitals);
        list.innerHTML = createMarkup(weatherService);
        const markup = `<input type="text" name="country">`;
        formContainer.innerHTML= "";
    })   
    .catch(err => console.log(err))
    .finally(() =>  searchForm.reset());
}

async function getCountries(arr) {
    const resp = arr.map(async item => {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`)
        if(!resp.ok) {
            throw new Error();
        }
        return resp.json();
    });

    const data = await Promise.allSettled(resp);
    const countryObj = data
    .filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value[0]);
    
    return countryObj;
}

async function getWeather(arr) {

    const BASE_URL = 'https://api.weatherapi.com/v1';
    const API_KEY = 'c0dca8ed73ba444e8db231919241301';

    const resps = arr.map(async city => {
        const params = new URLSearchParams({
            key: API_KEY,
            q: city,
            lang: "uk"
        });

        const resp = await fetch(`${BASE_URL}/current.json?${params}`)
        
        if(!resp.ok) {
            throw new Error(resp.statusText);
        }

        return resp.json();
    });
    
    const data = await Promise.allSettled(resps);
    const obj = data.filter(({ status }) => status === "fulfilled")
    .map(({ value }) => value);
    console.log(obj)
    return obj
};


function createMarkup(arr) {
    return arr.map(({ 
        current: { temp_c, condition: { icon, text }}, 
        location: { country, name } }) => `
    <li>
        <div>
            <h2>${country}</h2>
            <h3>${name}</h3>
            <img src="${icon}" alt="${text}">
            <p>${text}</p>
            <p>Температура: ${temp_c}</p>
        </div>
    </li>
    `).join("");
}