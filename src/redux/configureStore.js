import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missionReducer from './missions/missions';

const allReducers = combineReducers({
  missionReducer,
});

const store = configureStore({ reducer: allReducers });

export default store;
