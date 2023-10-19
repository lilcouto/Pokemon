function listarIDPokemon (pokemonID) {
    const pokemon = document.createElement("p");
    pokemon.innerText = pokemonID;
    const idPokemon = document.getElementById("id");
    idPokemon.append(pokemon);
}

function listarTipoPokemon (pokemonTipo) {
    const pokemon = document.createElement("p");
    pokemon.innerText = pokemonTipo;
    const tipo  = document.getElementById("tipo");
    // const tipo = document.getElementById("teste").setAttribute('src');
    tipo.append(pokemon);
}

function listarPesoPokemon (pokemonPeso) {
    const pokemon = document.createElement("p");
    pokemon.innerText = pokemonPeso;
    const peso  = document.getElementById("peso");
    // const tipo = document.getElementById("teste").setAttribute('src');
    peso.append(pokemon);
}

fetch("https:pokeapi.co/api/v2/pokemon/4")
    .then((response) => response.json())
    .then((response) => listarPesoPokemon(response.weight))
    // .then((response) => listarPokemon(response['sprites']['front_defautl']));
    // .then((response) => console.log(response))

fetch("https:pokeapi.co/api/v2/pokemon/4")
    .then((response) => response.json())
    .then((response) => listarTipoPokemon(response['types']['0']['type'].name))

fetch("https:pokeapi.co/api/v2/pokemon/4")
    .then((response) => response.json())
    .then((response) => listarIDPokemon(response.id))

fetch("https:pokeapi.co/api/v2/pokemon/4")
    .then((response) => response.json())
    .then((response) => console.log(response));
