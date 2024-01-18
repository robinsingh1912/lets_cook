import { fetchData, render } from './utils.js';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

const selectEl = document.querySelector('#pokemon-selector');

selectEl.onchange = (e) => {
  console.log(e.target.value);
};

export function initPokemon() {
  fetchData(POKEMON_URL).then((res) => renderDropdown(res.results));
}

function renderDropdown(options) {
  options.map((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option.url;
    optionEl.textContent = option.name;
    selectEl.appendChild(optionEl);
  });
}
