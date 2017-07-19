import axios from 'axios';
import YTSearch from 'youtube-api-search';
import actions from './types';
import { yt_key } from '../../api_keys';

const apiKey = '';
const BASE_URL = 'https://api.themoviedb.org/3/movie/550?api_key=' + apiKey;

export function fetchMedia (){
    const request = axios.get(`${BASE_URL}`);
        return {
            type: actions.FETCH_MEDIA,
            payload: request
        }
}

export function youtubeSearch(term) {
    return (dispatch) => {
        var response = []
        YTSearch({
            key: yt_key,
            term
        }, (videos) => {
            dispatch({
                type: actions.YOUTUBE_SEARCH,
                payload: videos
            });
        });
    }
    
};