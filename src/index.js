import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';
import testApp from './reducers';
import './index.css';
import TestRoot from './TestRoot';
import * as serviceWorker from './serviceWorker';

const store = createStore(testApp);

ReactDOM.render(<TestRoot store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
