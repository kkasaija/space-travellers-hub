import { useSelector } from 'react-redux';
import RocketsDisplay from './RocketsList';

const RocketsList = () => {
  const { Rockets } = useSelector((state) => state.rockets);

  return (

    <div>
      {Rockets.map((Rocket) => (
        <RocketsDisplay
          key={Rocket.id}
          id={Rocket.id}
          image={Rocket.image}
          name={Rocket.name}
          description={Rocket.description}
          reserved={Rocket.reserved}
        />
      ))}
    </div>

  );
};

export default RocketsList;
