import axios from 'axios';
import store from '../store';
import { getBanksSuccess } from '../actions/bank-actions';

export function getBanks() {
    return axios.get('http://localhost:10001/banks')
        .then(response => {
            store.dispatch(getBanksSuccess(response.data));
            return response;
        });
}
