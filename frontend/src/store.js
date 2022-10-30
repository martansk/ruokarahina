import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import playerReducer from './reducers/playerReducer';
import battleReducer from './reducers/battleReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore(
  {
    reducer: {
      players: playerReducer,
      battle: battleReducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
