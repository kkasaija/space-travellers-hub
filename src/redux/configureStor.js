import { configureStore } from '@reduxjs/toolkit';
import rockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets,
  },
});

export default store;
