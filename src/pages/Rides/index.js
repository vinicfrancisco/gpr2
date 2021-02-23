import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import RideItem from './components/RideItem';
import { Container } from './styles';

function Rides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    async function loadRides() {
      try {
        const { data } = await api.get('/carona');

        setRides(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadRides();
  }, []);

  return (
    <Container>
      {rides.map((ride) => (
        <RideItem data={ride} key={String(ride)} />
      ))}
    </Container>
  );
}

export default Rides;
