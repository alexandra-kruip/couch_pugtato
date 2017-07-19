import axios from 'axios';
import actions from './types';

const apiKey = '';
const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=' + apiKey;

export function fetchMedia (){
    const request = axios.get(`${BASE_URL}`);
        return {
            type: actions.FETCH_MEDIA,
            payload: request
        }
}

