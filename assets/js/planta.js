const createCardComponent = (informacoes) => {
    const pokemonlinha = document.createElement("div");
    pokemonlinha.classList.add("pokemonlinha");
    pokemons.appendChild(pokemonlinha);
    const imgbox = document.createElement("div");
    imgbox.classList.add("imgbox");
    pokemonlinha.appendChild(imgbox);
    const img = document.createElement("img");
    img.src = informacoes.sprite;
    img.width = 70;
    img.height = 70;
    imgbox.appendChild(img);
    const info = document.createElement("div");
    pokemonlinha.appendChild(info);
    const numero = document.createElement("p");
    numero.innerText = informacoes.order;
    numero.classList.add("numero");
    info.appendChild(numero);
    const nome = document.createElement("p");
    nome.classList.add("nome");
    nome.innerText = informacoes.name;
    info.appendChild(nome);    

    return pokemonlinha;
}


fetch('./api__planta.json')
    .then((response) => response.json())
    .then((response) => {
        const informacoes = response.pokemon_informacoes;
        console.log(informacoes);

        informacoes.forEach((pokemon) => {
            const cardContainer = document.getElementById("pokemons");
            cardContainer.appendChild(createCardComponent(pokemon));
        })
    });