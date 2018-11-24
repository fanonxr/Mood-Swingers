// imports
import { DOMelement } from './base';

export const getInput = () => {
    return DOMelement.searchInput.value;
};

export const clearInput = () => {
    DOMelement.searchInput.value = "";
};

export const clearResults = () => {
    DOMelement.searchResultBeerList.innerHTML = '';
    DOMelement.searchResultGifList.innerHTML = '';
};

export const renderBeer = (beer) => {
    const beerMarkup = `
    <li>
        <div class="beer-result-item">
            <img src="${beer.image_url}" alt="${beer.name}">
            <div class="beer-text">
                <h3>${beer.name}</h3>
                <p>${beer.tagline}</p>
            </div>
        </div>
        
    </li>
    `

    // rendering it to the page
    DOMelement.searchResultBeerList.insertAdjacentHTML('beforeend', beerMarkup);
};

export const renderGif = (gif) => {
    const gifMarkup = `
    <li>
        <div class="gif-result-item">
            <img src="${gif.images.fixed_height.url}">
        </div>
    </li>
    `

    DOMelement.searchResultGifList.insertAdjacentHTML('beforeend', gifMarkup);
}

// create buttons to show next set of gifs
// types are previous and next

const createButton = (page, type) => `
    <button class="button-inline button-type-${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>${type}</span>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
`;

const renderButtons = (page, numResults, resultsPerPage) => {
    const pages = Math.ceil(numResults / resultsPerPage);

    let button;

    if (page === 1 && pages > 1) {
        // display the next button 
        button = createButton(page, 'next');
    } else if (page < pages) {
        // display the next and previous buttons
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // display previous button
        button = createButton(page, 'prev');
    }

    // add the element to the page
    // DOMelement.searchResultGifPages.insertAdjacentHTML('afterbegin', button);
}

export const renderGifResults = (gifs, page = 1, resultsPerPage = 10) => {
    // render results of the current page
    const start = (page - 1) * resultsPerPage;
    const end = page * resultsPerPage;

    gifs.slice(start, end).forEach(renderGif);

    // render the pagnation button
    renderButtons(page, gifs.length, resultsPerPage);
}

export const renderBeerResults = (beers) => {
    beers.forEach(renderBeer);
};