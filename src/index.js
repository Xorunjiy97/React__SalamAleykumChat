import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './root/rootReducer';
import { Provider } from 'react-redux';


function init() {
    const store = createStore(rootReducer)
    window.store = store;

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

init();
reportWebVitals();
