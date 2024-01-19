const list = document.querySelector(".me");


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


async function getCapital() {
    try{
        const URL = 'https://restcountries.com/v3.1/name/';
        const arr = ['Ukraine', 'France', 'Germany'];
    
        const response = arr.map(async(ctr) => {
            const res =  await fetch(`${URL}${ctr}`);
            return res.json();
        })
    
        const promis = await Promise.allSettled(response);
        return promis;
    } catch(e) {
        console.log(e);
    }
}

getCapital()
.then(data => console.log(data))
.catch(e => console.log(e));