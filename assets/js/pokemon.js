import { fetchData, render, cache } from './utils.js';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';

const abilityEl = document.getElementById('ability');
const selectEl = document.querySelector('#pokemon-selector');

selectEl.onchange = (e) => {
  handleChange(e.target.value);
};

let cachedData = cache(fetchData);

function handleChange(url) {
  cachedData(url).then((res) => {
    render(JSON.stringify(res.abilities), abilityEl);
  });
}

function renderDropdown(options) {
  const frag = document.createDocumentFragment();
  options.map((option) => {
    const optionEl = document.createElement('option');
    optionEl.value = option.url;
    optionEl.textContent = option.name;
    frag.appendChild(optionEl);
  });
  selectEl.appendChild(frag);
}

export function initPokemon() {
  cachedData(POKEMON_URL).then((res) => renderDropdown(res.results));
}
