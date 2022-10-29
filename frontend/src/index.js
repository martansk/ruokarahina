import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import IntroBox from './components/introBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntroBox />
            <App />
            <footer>
            Tämä sivusto hyödyntää Terveyden ja hyvinvoinnin laitoksen, Finelin, avointa dataa.
            </footer>
        </Provider>
    </React.StrictMode>
);
