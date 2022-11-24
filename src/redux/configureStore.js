import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missions from './missions/missions';
import rockets from './rockets/rockets';

const allReducers = combineReducers({
  missions,
  rockets,
});

const store = configureStore({ reducer: allReducers });

export default store;
