import axios from 'axios';
import YTSearch from 'youtube-api-search';
import actions from './types';
import { yt_key } from '../../api_keys';
import { tmdb_key } from '../../api_keys';


const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key='+ tmdb_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&append_to_response=videos,images,genre_ids';

export function fetchMedia (){
    const request = axios.get(`${BASE_URL}`);
        return {
            type: actions.FETCH_MEDIA,
            payload: request
        }
}

export function youtubeSearch(term) {
    return (dispatch) => {
        var response = [];
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