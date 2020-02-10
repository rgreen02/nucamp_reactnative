//comments reducer
import * as ActionTypes from './ActionTypes';

export const comments = (state = {
    errMess: null,
    comments: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.CAMPSITES_LOADING:
            return { ...state, errMess: action.payload };

        default:
            return state;
    }
};