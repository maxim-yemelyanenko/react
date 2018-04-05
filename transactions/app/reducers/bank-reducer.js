import * as types from '../actions/action-types';

const initialState = {
    banks: []
};

const bankReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_BANKS_SUCCESS:
            return Object.assign({}, state, { banks: action.banks });
    }
    return state;
}

export default bankReducer;
