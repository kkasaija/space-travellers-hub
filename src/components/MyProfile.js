/* eslint-disable no-console */
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((state) => state.missions.missionList);
  console.log('selected missions', missions);
  const selectedMissions = missions.filter((mission) => mission.join);
  console.log(selectedMissions);
  return (
    <div className="wrapper_profile">
      <div className="mission-profile">
        <h2>My Missions</h2>
        <ul className="lists">
          {selectedMissions.length > 0 ? (
            selectedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          ) : (
            <li>
              <p>Activated Missions Not Found</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
