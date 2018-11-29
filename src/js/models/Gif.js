import axios from 'axios';
import { apiKey } from '../config';

class Giphy {
    constructor(id) {
        this.id = id;
    }

    async getGif() {
        try {
            const result = await axios(`http://api.giphy.com/v1/gifs/${this.id}?api_key=${apiKey}`);
            console.log(result)
            this.source = result.data.data.source;
            this.title = result.data.data.title;
        } catch (error) {
            console.log(error);

            alert("something went wrong");
        }
    }
}

export default Giphy;