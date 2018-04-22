import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import browserRouter from './browserRouter';

ReactDOM.render(
    <Provider store={store}>{browserRouter}</Provider>,
    document.getElementById('root')
);