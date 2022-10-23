import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import playerReducer from './reducers/playerReducer';
import battleReducer from './reducers/battleReducer';
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import filterReducer from './reducers/filterReducer';


const store = configureStore({
    reducer: {
        players: playerReducer,
        battle: battleReducer,
        data: dataReducer,
        filter: filterReducer
    }
}, applyMiddleware(thunk));

export default store;