const URL = "https://pokeapi.co/api/v2/pokemon/";

function fetchPokemon(idPokemon) {
    return fetch(`${URL}${idPokemon}`).then(response => response.json())
}

export {fetchPokemon};