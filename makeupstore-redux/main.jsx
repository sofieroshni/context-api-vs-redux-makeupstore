import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-reduc'
import store from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>  ///i Context-api var det value='xx' man passerede som props
        <App />
    </Provider>,
)