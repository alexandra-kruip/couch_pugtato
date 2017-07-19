import { combineReducers } from 'redux';
import mediaReducer from './media_reducer';
import videos from './reducer_yt';


const rootReducer = combineReducers({
    media: mediaReducer,
    youtube: videos
});

export default rootReducer;