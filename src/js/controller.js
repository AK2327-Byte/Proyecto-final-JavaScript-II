import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/SearchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 1. Cargar la receta
    await model.loadRecipe(id);

    // 2. Renderizar la receta
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. Obtener la consulta de búsqueda
    const query = searchView.getQuery();
    if (!query) return;

    // 2. Cargar los resultados
    await model.loadSearchResults(query);

    // 3. Renderizar los resultados de la primera página
    resultsView.render(model.getSearchResultsPage());

    // 4. Renderizar los botones de paginación iniciales
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1. Renderizar NUEVOS resultados para la página seleccionada
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. Renderizar NUEVOS botones de paginación
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};

init();