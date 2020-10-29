// imports
import { fetchMovies, searchMovies } from './movie';
import { initSortable } from './plugins/initSortable';
import { initMarkdownIt } from './plugins/initMarkdownIt';
import { initSelect2 } from './plugins/initSelect2';

// functions calls
fetchMovies("star wars");

// Plugins initialization
initSortable();
initMarkdownIt();
initSelect2();

// Events handling
const button = document.querySelector("#submit");
button.addEventListener("click", searchMovies);
