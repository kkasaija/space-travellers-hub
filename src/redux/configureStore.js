import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missions from './missions/missions';

const allReducers = combineReducers({
  missions,
});

const store = configureStore({ reducer: allReducers });

export default store;
