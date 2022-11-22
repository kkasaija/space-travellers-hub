/* eslint-disable no-console */
const missionUrl = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'missionStore/missionReducer/FETCH_MISSIONS';

const initialState = {
  missionList: [],
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return {
        ...state,
        missionList: [...action.payload],
      };
    default:
      return state;
  }
};

const fetchMissions = async () => {
  try {
    const result = await fetch(missionUrl);
    if (result.ok) {
      const data = await result.json();
      console.log('Mission received', data);
      return data;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export { fetchMissions };
export default missionReducer;
