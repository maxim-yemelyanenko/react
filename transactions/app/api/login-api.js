import axios from 'axios';
import store from '../store';
import { getUserSuccess, loginSuccess, logoutSuccess } from '../actions/login-actions';

export function getUser() {
    return axios.get('http://localhost:10001/user')
        .then(response => {
            store.dispatch(getUserSuccess(response.data));
            return response;
        });
}

export function login(userName, password) {
    // simple authorization: accept any user
    return axios.put('http://localhost:10001/user',{ loggedIn: true })
        .then(response => {
            store.dispatch(loginSuccess(response.data));
            return response;
        });
}

export function logout() {
    return axios.put('http://localhost:10001/user',{ loggedIn: false })
        .then(response => {
            store.dispatch(logoutSuccess(response.data));
            return response;
        });
}
