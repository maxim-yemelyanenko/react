import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
    transactions: []
};

const transactionReducer = function(state = initialState, action) {
    switch(action.type) {
        case types.GET_TRANSACTIONS_SUCCESS:
            return Object.assign({}, state, { transactions: action.transactions });
        case types.DELETE_TRANSACTION_SUCCESS:
            const transactionsAfterDelete = _.filter(state.transactions, transaction => transaction.id != action.transactionId);
            return Object.assign({}, state, { transactions: transactionsAfterDelete });
        case types.ADD_TRANSACTION_SUCCESS:
            const transactionsAfterAdd = state.transactions.concat(action.transaction);
            return Object.assign({}, state, { transactions: transactionsAfterAdd });
    }
    return state;
}

export default transactionReducer;
