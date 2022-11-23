import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const RocketApis = 'https://api.spacexdata.com/v3/rockets';

const INITIAL_STATE = {
  loading: false,
  Rockets: [],
};

export const fetchRockets = createAsyncThunk('rockets/getRockets', async () => {
  const res = await fetch(RocketApis);
  return res.json();
});
