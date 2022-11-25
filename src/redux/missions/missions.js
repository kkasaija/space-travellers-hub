/* eslint-disable no-unused-vars */
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
  },

  reducers: {
    joinMission: (state, action) => {
      const stateAsign = state;
      const { id, type } = action.payload;
      stateAsign.missionList.map((mission) => {
        if (type === 'leave' && id === mission.id) {
          Object.assign(mission, { join: false });
        }
        if (type === 'join' && id === mission.id) {
          Object.assign(mission, { join: true });
        }
        return mission;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMission.pending, (state) => {
      const stateAsign = state;
      stateAsign.status = 'pending';
      stateAsign.missionList = [];
      stateAsign.error = null;
    });
    builder.addCase(fetchMission.fulfilled, (state, action) => {
      const stateAsign = state;
      const missionsArr = action.payload.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      stateAsign.missionList = missionsArr;
      stateAsign.status = 'success';
      stateAsign.error = null;
    });
    builder.addCase(fetchMission.rejected, (state, action) => {
      const stateAsign = state;
      stateAsign.status = 'failed';
      stateAsign.missionList = [];
      stateAsign.error = action.payload;
    });
  },
});

export const { joinMission } = missionSlice.actions;
export default missionSlice.reducer;
