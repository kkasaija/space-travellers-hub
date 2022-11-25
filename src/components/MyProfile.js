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
        <h1 className="Myprof">My Rockets</h1>
        <ul>
          {selectedRockets.length > 0 ? (
            selectedRockets.map((rocket) => (
              <li key={rocket.id}>{rocket.name}</li>
            ))
          ) : (
            <li>
              <p className="Not">Reserved Rockets Not Found</p>
            </li>
          )}
        </ul>
      </div>
      <div className="rocket-mission">
        <h1 className="Myprof">My Missions</h1>
        <ul>
          {selectedMissions.length > 0 ? (
            selectedMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          ) : (
            <li>
              <p className="Not">Activated Missions Not Found</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
