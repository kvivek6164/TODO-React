import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

// import App from './components/App';
import store from './js/store/index';
import App from './js/components/app';

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
document.getElementById('root'));