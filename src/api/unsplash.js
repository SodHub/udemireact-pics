import axios from 'axios';


const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 'Client-ID dd310449052c5386feb5b27def6ad7115bc63a4808c1490624fed9b4c083b9a5'
    }
});

export default unsplash;