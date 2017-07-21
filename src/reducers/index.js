import { combineReducers } from 'redux';
import mediaReducer from './media_reducer';
import videos from './reducer_yt';
import yelpReducer from './yelp_reducer';


const rootReducer = combineReducers({
    media: mediaReducer,
    youtube: videos,
    yelp: yelpReducer,
    youtubeBoolean: videos
});

export default rootReducer;