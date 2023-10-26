/import axios from 'axios'/
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carouselExampleCaptions");
  const items = carousel.querySelectorAll("[data-te-carousel-item]");
  let currentIndex = 0;

  function showItem(index) {
    items.forEach((item) => item.classList.add("hidden"));
    items[index].classList.remove("hidden");
  }

  function updateIndicators(index) {
    const indicators = carousel.querySelectorAll("[data-te-carousel-active]");
    indicators.forEach((indicator) =>
      indicator.removeAttribute("data-te-carousel-active")
    );
    indicators[index].setAttribute("data-te-carousel-active", "");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
    updateIndicators(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
    updateIndicators(currentIndex);
  }

  const nextButton = document.querySelector('[data-te-slide="next"]');
  const prevButton = document.querySelector('[data-te-slide="prev"]');

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});
async function getPokemon(pokemonName) {
  const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  try {
    const resposta = await axios.get(API_URL);

    return resposta.data;
  } catch (error) {
    throw error;
  }
}

const createPokedex = () => {
  //h2.titulopokemon
  console.log('Entrou na função!')
  const nomePokemon = document.createElement("h2");
  nomePokemon.classList.add("titulopokemon");
  //div.bulbacarac
  const pokemon = document.createElement("div");
  pokemon.classList.add("bulbacarac");
  //  div.bulbacarac > container
  const container = document.createElement("div");
  container.classList.add("container");
  pokemon.appendChild(div);
  //div.bulbacarac > bulbass
  const pokeimg = document.createElement("div");
  pokeimg.classList.add("bulbass");
  pokemon.appendChild(div);
  //div.bulbass > img.imgboxx
  const pokefoto = document.createElement("img");
  pokefoto.classList.add("imgboxx");
  pokeimg.appendChild(img);
  //div.bulbacarac > caracteristica
  const pokedados = document.createElement("div");
  pokedados.classList.add("caracteristica");
  pokemon.appendChild(div);
  //div.caracteristica > p
  const altura = document.createElement("p");
  getPokemon("bulbasaur").then((valorAltura) => {
    altura.innerText = valorAltura.game_indices.height;

  });
 
};
createPokedex ()