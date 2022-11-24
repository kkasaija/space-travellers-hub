/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMission = createAsyncThunk('mission/fetchMission',
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/missions');
      return response?.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  });
const missionSlice = createSlice({
  name: 'missions',
  initialState: {
    missionList: [],
    status: null,
    error: null,
    join: false,
  },

  reducers: {
    joinMission: (state, action) => {
      const join = false;
      state.missionList.map((mission) => (
        mission.mission_id === action.payload ? Object.assign(
          mission, { join: !join },
        ) : mission
      ));
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      state.status = 'pending';
      state.missionList = [];
      state.error = null;
    });
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      state.status = 'success';
      state.missionList = action.payload;
      state.error = null;
    });
    builder.addCase(fetchMission.rejected, (state, action) => {
      state.status = 'failed';
      state.missionList = [];
      state.error = action.payload;
    });
  },
});

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
