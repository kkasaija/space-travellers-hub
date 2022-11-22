import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  // rockets,
  // missions,
});

const store = configureStore({ reducer: allReducers });

export default store;
