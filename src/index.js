import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Store } from 'redux_store/store';
import { App } from 'App';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={Store}>
    <App/>
</Provider>);