import actions from '../actions/types';

const DEFAULT_STATE = {
    videos: []
};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actions.YOUTUBE_SEARCH:
            return {...state, videos: action.payload}
        default:
            return state;
    }
};