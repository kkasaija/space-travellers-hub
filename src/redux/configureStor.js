import { configureStore, combineReducers } from '@reduxjs/toolkit';


const allReducers = combineReducers({
  rockets,
  missions,
});

const store = configureStore({ reducer: allReducers });

export default store;
