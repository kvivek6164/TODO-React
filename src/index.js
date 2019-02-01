import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './js/store/index';
import App from './js/components/app';
ReactDOM.render(
    <Provider store={store}>
        <div className="container-fluid">
            <App />
        </div>
    </Provider>,
    document.getElementById('root'));