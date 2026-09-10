import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/ResultsView.js';
import paginationView from './views/paginationView.js';

// Importación de iconos para producción con Parcel
import icons from 'url:../img/icons.svg';
import 'regenerator-runtime/runtime';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 0. Actualizar resultados AL INSTANTE para marcar la receta activa
    if (model.state.search.results.length > 0) {
      resultsView.render(model.getSearchResultsPage()); 
    }

    // 1. Cargar receta
    await model.loadRecipe(id);

    // 2. Renderizar receta
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

    // 2. Cargar resultados
    await model.loadSearchResults(query);

    // 3. Renderizar resultados en la lista lateral
    resultsView.render(model.getSearchResultsPage());

    // 4. Renderizar la paginación inicial
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 1. Renderizar NUEVOS resultados
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