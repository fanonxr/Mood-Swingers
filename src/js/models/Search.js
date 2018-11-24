import axios from 'axios';

// creating a class Search where the term that is searched
// will be an object that matches the query

class Search {
    constructor(query) {
        this.query = query;
    }

    // methods to make the ajax request
    async getGiphyResults(query) {
        const apiKey = 'buItX5pvA2UUe7fWmaiux6TUXeC2mrQX';

        try {
            // axios automatically returns a promise object that is JSON already
            const result = await axios(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${this.query}`)
            this.gifs = result.data.data;

        } catch (error) {
            alert(error);
        }
    }

    // method to get the beer data via seach

    async getBeerResults(query) {
        // const beerAPIKey = 'b6e9d10060f888380302a9cbcbdb0133'

        try {
            const result = await axios(`https://api.punkapi.com/v2/beers`);
            // const result = await axios(`https://api.codetabs.com/v1/proxy?quest=https://api.openbrewerydb.org/`);
            //const result = await axios(`https://api.codetabs.com/v1/proxy?quest=https://sandbox-api.brewerydb.com/v2/?key=${beerAPIKey}&search/beer?=${this.query}`)
            console.log(result)
            // get the data from the API
            this.beers = result.data;

        } catch (error) {
            alert(error);
        }
    }

}

export default Search;