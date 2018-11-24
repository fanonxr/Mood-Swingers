// imports

import Search from './models/Search';
import * as searchView from './views/SearchView';
import { DOMelement, renderSpinner, clearLoader } from './views/base';

// handling the global state of the app
/*
- Search object
- Beer objects
- Gif objects
- save moods
 */

const state = {};

const controlSearch = async () => {
    // 1. get the query from the user input/view file
    const query = DOMelement.searchInput.value; // todo

    if (query) {
        // 2. create a new search object and add to the global state
        state.search = new Search(query);

        // 3. prepare the UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderSpinner(DOMelement.searchResultContainer);

        // 4. search for the beers and gifs that match
        await state.search.getBeerResults();
        await state.search.getGiphyResults();

        // 5. render the results on the UI
        searchView.renderBeerResults(state.search.beers);
        searchView.renderGifResults(state.search.gifs)
        clearLoader();



        // temporaily log the results
        console.log(state.search);
        console.log(state.search.beers);
        console.log(state.search.gifs)
    }
}

// event listener to search for mood
DOMelement.searchForm.addEventListener('submit', event => {
    event.preventDefault();

    controlSearch();
});

// event listener for paganation
DOMelement.searchResultGifPages.addEventListener('click', event => {
    const button = event.target.closest('.button-inline');

    if (button) {
        const goToPage = parseInt(button.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderGifResults(state.search.recipes, goToPage);
    }
});