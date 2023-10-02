const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const reloadButton = document.getElementById('reloadButton');


const maxRecords = 151;
const limit = 10;
let offset = 0;

let pokemonName;
let pokemonInfo;

function convertPokemonToLi(pokemon) {
  return `
        <button class="listButton">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        </button>
        `;
}

function findPokemonName() {
  const listButton = document.getElementsByClassName("listButton");
  for (let i = 0; i < listButton.length; i++) {
    listButton[i].addEventListener(
      "click",
      () => (
        pokeApi.getPokemonInfo(listButton[i].innerText.split("\n")[1])
      )
    );
  }
}


async function loadPokemonItens(offset, limit) {
  await pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });

  findPokemonName();
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});



reloadButton.addEventListener('click', () => {
  location.reload();
});