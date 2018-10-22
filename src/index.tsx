import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {enthusiasm} from "./reducers/index";
import {StoreState} from "./types/index";
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import {EnthusiasmAction} from "./actions";

import './index.css';
import registerServiceWorker from './registerServiceWorker';


// Reducer : a function that returns the next state tree, given the current
// state tree and action to handle

// createStore:
// the return value of createStore is an object with a number of functions as 
// properties: getState, dispatch, subscribe, replaceReducer.
// createStore(reducer, preloadedState, enhancer)


const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
});

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
