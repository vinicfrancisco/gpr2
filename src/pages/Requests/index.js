import React from 'react';
import RequestItem from './components/RequestItem';
import { Container } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7];

function Requests() {
  return (
    <Container>
      {data.map((item) => (
        <RequestItem key={String(item)} />
      ))}
    </Container>
  );
}

export default Requests;
