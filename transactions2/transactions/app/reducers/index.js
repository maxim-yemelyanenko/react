import { combineReducers } from 'redux';

// Reducers
import loginReducer from './login-reducer';
import transactionReducer from "./transaction-reducer";
import bankReducer from "./bank-reducer";

// Combine Reducers
var reducers = combineReducers({
    loginState: loginReducer,
    transactionState: transactionReducer,
    bankState: bankReducer
});

export default reducers;
