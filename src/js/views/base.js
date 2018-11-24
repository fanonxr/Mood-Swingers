export const DOMelement = {
    // dom elements on index
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search-input'),
    searchResultBeerList: document.querySelector('.beer-list'),
    searchResultGifList: document.querySelector('.gifs-list'),
    searchResultContainer: document.querySelector('.results-container'),
    searchResultGifPages: document.querySelector('.gif-results'),
};

export const elementStrings = {
    spinner: 'spinner'
};

// loader spinner
export const renderSpinner = (parent) => {
    const spinner = `
    <div class="${elementStrings.spinner}">
        <img src="img/pacman.gif" alt="Pacman Loader">
    </div>
    `;

    parent.insertAdjacentHTML('afterbegin', spinner);
}

// clear the spinner once the data loads
// since the this item doesnt exist, we have to put it in the base file
export const clearLoader = () => {
    const spinner = document.querySelector(`.${elementStrings.spinner}`);

    if (spinner) {
        spinner.parentElement.removeChild(spinner);
    };
}

