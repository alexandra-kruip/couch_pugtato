import axios from 'axios';
import actions from './types';

const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=72c2461a868b47b346d72e43036bfb70';

export function fetchMedia (){
    const request = axios.get(`${BASE_URL}`);
        return {
            type: actions.FETCH_MEDIA,
            payload: request
        }
}

