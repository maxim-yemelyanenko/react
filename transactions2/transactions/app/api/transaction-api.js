import axios from 'axios';
import store from '../store';
import { getTransactionsSuccess, deleteTransactionSuccess, addTransactionSuccess } from '../actions/transaction-actions';

export function getTransactions() {
    return axios.get('http://localhost:10001/transactions')
        .then(response => {
            store.dispatch(getTransactionsSuccess(response.data));
            return response;
        });
}

export function deleteTransaction(transactionId) {
    return axios.delete('http://localhost:10001/transactions/' + transactionId)
        .then(response => {
            store.dispatch(deleteTransactionSuccess(transactionId));
            return response;
        });
}

export function addTransaction(transaction) {
    return axios.post('http://localhost:10001/transactions', transaction)
        .then(response => {
            store.dispatch(addTransactionSuccess(transaction));
            return response;
        })
        .catch(error => {
            // For example, transaction exists. Can dispatch addTransactionFailed(transaction) or update with axios.put
            console.log(error)
        });;
}
