import axios from 'axios';
import { key } from '../config';
import { type } from 'os';

class Beer {
    constructor(id) {
        // really no need since the beer api doesnt have a get
        // actually an id will be useful
        this.id = id;

        // id = this.result.data.id
    }

    async getBeer() {
        try {
            const result = await axios(`https://api.punkapi.com/v2/beers/${this.id}`);
            console.log(result.data)
            // will add the result of beer data to the beer instance
            this.name = result.data.name;
            this.description = result.data.description;
            this.tagline = result.data.tagline;
            this.img = result.data.image_url;

        } catch (error) {

            console.log(error);
            alert("something went wrong :( ")

        }
    }
}

export default Beer;