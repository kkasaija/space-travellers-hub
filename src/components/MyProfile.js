import { useSelector } from 'react-redux';
import './MyProfile.modules.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.Rockets);
  const selectedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const missions = useSelector((state) => state.missions.missionList);
  const selectedMissions = missions.filter((mission) => mission.join);
  return (
    <div className="main-wrapper">
      <div className="rockets-mission">
        <h2>My Rockets</h2>
        <ul>
          {selectedRockets.length > 0 ? (
            selectedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
          ) : (
            <li>
              <p>Reserved Rockets Not Found</p>
            </li>
          )}
        </ul>
      </div>
      <div className="rocket-mission">
        <h2>My Missions</h2>
        <ul>
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
