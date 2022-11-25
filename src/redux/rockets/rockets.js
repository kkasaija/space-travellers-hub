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

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: INITIAL_STATE,
  reducers: {
    handleRocketReservation: (state, action) => {
      const stateasigni = state;
      const { id, type } = action.payload;
      const newState = current(state).Rockets.map((rocket) => {
        if (type === 'reserve' && id === rocket.id) {
          return { ...rocket, reserved: true };
        }
        if (type === 'cancel' && id === rocket.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      stateasigni.Rockets = newState;
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const stateasign = state;
      const rocketsArr = action.payload.map((item) => ({
        id: item.id,
        name: item.rocket_name,
        description: item.description,
        image: item.flickr_images[0],
        reserved: false,
      }));

      stateasign.Rockets = rocketsArr;
      stateasign.loading = false;
    },

    [fetchRockets.pending]: (state) => {
      const stateasigns = state;
      stateasigns.loading = true;
    },

    [fetchRockets.rejected]: (state) => {
      const stateasigns = state;
      stateasigns.loading = false;
    },
  },
});

export const { handleRocketReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
