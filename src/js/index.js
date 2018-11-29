// imports

import Search from './models/Search';
import Beer from './models/Beer';
import Giphy from './models/Gif';
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

/**
 * Search Controller
 */

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

/**
 * Beer controller
 */

// const beerer = new Beer(1);
// beerer.getBeer();
// console.log(beerer);

const controlBeer = async () => {
    const beerId = window.location.hash.replace('#', '');

    if (beerId) {
        state.beer = new Beer(BeerId);

        try {

            await state.beer.getBeer();

            console.log(state.beer);

        } catch (error) {
            alert("error processing beer");
        }
    }
}

/**
 * Gif controller
 */

// const giffer = new Giphy("feqkVgjJpYtjy");
// giffer.getGif();
// console.log(giffer);

const controlGif = async () => {
    const gifId = window.location.hash.replace('#', '');
    console.log(gifId);

    if (gifId) {
        state.giphy = new Giphy(gifId);

        try {
            await state.giphy.getGif();

            // render the gif
            console.log(state.giphy);

        } catch (error) {
            alert("Something went wrong processing the gif")
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlGif));
//['hashchange', 'load'].forEach(event => window.addEventListener(event, controlBeer));