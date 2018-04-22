import * as types from '../actions/action-types';

export function getUserSuccess(user) {
    return {
        type: types.GET_USER_SUCCESS,
        user
    };
}

export function loginSuccess(user) {
    return {
        type: types.LOGIN_SUCCESS,
        user
    };
}

export function logoutSuccess(user) {
    return {
        type: types.LOGOUT_SUCCESS,
        user
    };
}