import * as types from '../actions/action-types';

const initialState = {
    user: {
        loggedIn: undefined
    }
};

const loginReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_USER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.LOGOUT_SUCCESS:
            return Object.assign({}, state, { user: action.user });
    }
    return state;
}

export default loginReducer;
