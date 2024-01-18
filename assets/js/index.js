'use strict';
import { initPokemon } from './pokemon.js';
import { themeInit } from './theme.js';

window.addEventListener('DOMContentLoaded', () => {
  themeInit();
  initPokemon();
});
