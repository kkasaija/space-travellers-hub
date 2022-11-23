import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missionReducer.missionList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMission());
  }, []);
  return (
    <div>
      {missions.loading && <div>Loading......</div>}
      {!missions.loading && missions.error ? (
        <div>
          Error:
          {' '}
          {missions.error}
        </div>
      ) : null}
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr className="mission-container" key={mission.mission_id}>
              <td className="name-field">{mission.mission_name}</td>
              <td className="description-field">{mission.description}</td>
              <td className="status-field">
                <p className={mission.join ? 'active' : ''}>
                  {mission.join ? 'Active Member' : 'NOT A MEMBER'}
                </p>
              </td>
              <td className="action-container">
                <button
                  type="button"
                  className={mission.join ? 'btn active' : 'btn'}
                >
                  {mission.join ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
