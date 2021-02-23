import React from 'react';
import RideItem from './components/RideItem';
import { Container } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7];

function Rides() {
  return (
    <Container>
      {data.map((item) => (
        <RideItem key={String(item)} />
      ))}
    </Container>
  );
}

export default Rides;
