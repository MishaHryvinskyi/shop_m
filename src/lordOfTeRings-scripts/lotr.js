
// const list = document.querySelector(".js-lord");

// const BASE_URL = "https://the-one-api.dev/v2";
// const END_POINT ="/character";
// const KEY = "_tIFbeZ1P-MpeTH2BzF-";

// let page = 0;

// function getCharacter() {
//     const param = new URLSearchParams({
//         limit: 30,
//         page: 1,
//     });

//     const option = {
//         method: "GET",
//         headers: {
//             Authorization: `Bearer ${KEY}`
//         }
//     }

//     fetch(`${BASE_URL}${END_POINT}?${param}`,option)
//     .then(response => response.json()).then(data => list.innerHTML = createMarkup(data.docs))
// }
// getCharacter()

// function createMarkup(arr) {
//     return arr.map(({ race, gender, birth, spouse, wikiUrl, name  }) => `
//         <li>
//             <h2>${name}</h2>
//             <h3>${race}</h3>
//             <h4>${gender}</h4>
//             <h5>${birth}</h5>
//             <h6>${spouse}</h6>
//             <a href="${wikiUrl}">Read more</a>
//         </li>
//     `).join('')
// }


// button load more

// const btn = document.querySelector(".js-load");
// const list = document.querySelector(".js-lord");
// const target = document.querySelector(".js-guard");


// const BASE_URL = "https://api.themoviedb.org/3/";
// const END_POINT = "trending/movie/day";
// const API_KEY = "0f1efce4687e0d99ded26e5d35e0a6b0";
// const IMG_PATH = "https://image.tmdb.org/t/p/w500";

// let currentPage = 1;

// btn.addEventListener('click', onLoad);

// function onLoad() {
//     currentPage += 1;
//     getTrending(currentPage)
//     .then(data => {
//         list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//         if(data.page === data.total_pages) {
//             btn.hidden = true;
//         }
//     })
//     .catch((err) => console.log(err));
// }

// function getTrending(page = 1) {
//    return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}&language=uk`)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(response.statusText);
//         }
//         return response.json();
//     })
// }

// getTrending()
// .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results))
//     if(data.page !== data.total_pages) {
//         btn.hidden = false;
//     }
// })
// .catch((err) => console.log(err));

// function createMarkup(result) {
//     return result.map(({ title, original_title, overview, poster_path, release_date }) => `
//         <li class="list-movie__item">
//             <img class="list-movie__img" src="${IMG_PATH}${poster_path}" alt="${original_title}" width="350" />
//             <h2 class="list-movie__title">${title} <i>оригінальна назва:</i> ${original_title}</h2>
//             <h3>Дата релізу: ${release_date}</h3>
//             <p>${overview}</p>
//         </li>
//     `).join('')
// }

// infiniti scroll
const BASE_URL = "https://api.themoviedb.org/3/";
const END_POINT = "trending/movie/day";
const API_KEY = "0f1efce4687e0d99ded26e5d35e0a6b0";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const list = document.querySelector(".js-lord");
const target = document.querySelector(".js-guard");

let currentPage = 1;

// опції для класу IntersectionObserver
let options = {
    root: null,
    rootMargin: "300px",
    threshold: 1,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            currentPage += 1;
            getTrending(currentPage)
            .then(data => {
                list.insertAdjacentHTML('beforeend', createMarkup(data.results));
                if(data.page === data.total_pages) {
                    observer.unobserve(target);
                }
            })
            .catch((err) => console.log(err));
        }
    })
}

function getTrending(page = 1) {
   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}&language=uk`)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        }
        return response.json();
    })
}

getTrending()
.then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results))
    observer.observe(target)
})
.catch((err) => console.log(err));

function createMarkup(result) {
    return result.map(({ title, original_title, overview, poster_path, release_date }) => `
        <li class="list-movie__item">
            <img class="list-movie__img" src="${IMG_PATH}${poster_path}" alt="${original_title}" width="350" />
            <h2 class="list-movie__title">${title} <i>оригінальна назва:</i> ${original_title}</h2>
            <h3>Дата релізу: ${release_date}</h3>
            <p>${overview}</p>
        </li>
    `).join('')
}