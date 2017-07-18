import { combineReducers } from 'redux';
import mediaReducer from './media_reducer';


const rootReducer = combineReducers({
    media: mediaReducer
});

export default rootReducer;