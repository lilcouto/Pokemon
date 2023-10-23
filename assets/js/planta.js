const createCardComponent = () => {
    const pokemons = document.getElementById("pokemons")
    const pokemonlinha = document.createElement("div");
    pokemonlinha.classList.add("pokemonlinha");
    pokemons.appendChild(pokemonlinha);
    const imgbox = document.createElement("div");
    imgbox.classList.add("imgbox");
    pokemonlinha.appendChild(imgbox);
    const img = document.createElement("img");
    img.src = 
    imgbox.appendChild(img);
    const info = document.createElement("div");
    pokemonlinha.appendChild(info);
    const numero = document.createElement("p");
    numero.classList.add("numero");
    info.appendChild(numero);
    const nome = document.createElement("p");
    nome.classList.add("nome");
    info.appendChild(nome);
    /*nome.innerText = PokemonName;*/

    return pokemonlinha;
}

/*function createPokemonImage(url) {
    img.src = url;
    img.width = 100; 
}


fetch('https://pokeapi.co/api/v2/type/grass/')
    .then(response => response.json())
    .then(response => console.log(createCardComponent()));
        /*response.results.forEach(nome) => {
        createCardComponent(nome)
    }*/
    /*(response.pokemon[0].name)*/

fetch('https://pokeapi.co/api/v2/type/grass/')
    .then(response => response.json())
    .then(response => console.log(createCardComponent()));    