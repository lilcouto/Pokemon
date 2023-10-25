const createCardComponent = () => {
    const pokemons = document.getElementById("pokemons")
    const pokemonlinha = document.createElement("div");
    pokemonlinha.classList.add("pokemonlinha");
    pokemons.appendChild(pokemonlinha);
    const imgbox = document.createElement("div");
    imgbox.classList.add("imgbox");
    pokemonlinha.appendChild(imgbox);
    if (pokemon.types.type.name == "grass") {
        fetch('https://pokeapi.co/api/v2/pokemon' + PokemonName)
            .then(response => response.json())
            .then(response => {
            createPokemonImage(response.sprites.front_default);
        });
    }
    const info = document.createElement("div");
    pokemonlinha.appendChild(info);
    const numero = document.createElement("p");
    numero.classList.add("numero");
    if (pokemon.types.type.name == "grass") {
        numero.innerText = "#" + pokemon.order};
    info.appendChild(nome);
    info.appendChild(numero);
    const nome = document.createElement("p");
    nome.classList.add("nome");
    if (pokemon.types.type.name == "grass") {
        nome.innerText = pokemon.name};
    info.appendChild(nome);

    return pokemonlinha;
}

function createPokemonImage(url) {
    const img = document.createElement("img");
    img.src = url;
    img.width = 100;
    document.getElementsByClassName("imgbox").append(img); 
}


fetch('https://pokeapi.co/api/v2/pokemon/?limit=70')
    .then(response => response.json())
    .then(response => {
        response.results.name.forEach((nome) => {
            console.log(createCardComponent(response.pokemon[0].pokemon.name))
        })});
        

/*fetch('https://pokeapi.co/api/v2/pokemon/?limit=70')
    .then(response => response.json())
    .then(response => console.log(createCardComponent()));*/