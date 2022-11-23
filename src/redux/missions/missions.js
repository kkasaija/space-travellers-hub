/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMission = createAsyncThunk('missions/fetchMission', () => axios.get('https://api.spacexdata.com/v3/missions')
  .then((response) => response.data));

const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    missionList: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      state.loading = false;
      state.missionList = action.payload;
      state.error = '';
    });
    builder.addCase(fetchMission.rejected, (state, action) => {
      state.loading = false;
      state.missionList = [];
      state.error = action.error.message;
    });
  },
});

export default missionSlice.reducer;
