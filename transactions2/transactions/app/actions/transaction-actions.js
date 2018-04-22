import * as types from '../actions/action-types';

export function getTransactionsSuccess(transactions) {
    return {
        type: types.GET_TRANSACTIONS_SUCCESS,
        transactions
    };
}

export function deleteTransactionSuccess(transactionId) {
    return {
        type: types.DELETE_TRANSACTION_SUCCESS,
        transactionId
    };
}

export function addTransactionSuccess(transaction) {
    return {
        type: types.ADD_TRANSACTION_SUCCESS,
        transaction
    };
}
