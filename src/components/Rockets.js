import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import RocketsList from './RocketItems';

const Rockets = () => {
  const dispatch = useDispatch();
  const { loading, Rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (Rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch]);

  return (

    <div>
      {loading && <div>Loading ...</div>}
      {!loading && (<RocketsList />)}

    </div>
  );
};

export default Rockets;
