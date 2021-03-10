import React, { useState, useEffect } from 'react';
import RequestItem from './components/RequestItem';
import { Container } from './styles';
import api from '~/services/api';

function Requests() {
  const [myRides, setRides] = useState([]);

  useEffect(() => {
    async function loadRides() {
      try {
        const { data } = await api.get(
          `/user/motorista/caronas/${localStorage.TOKEN_KEY}`
        );
        setRides(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadRides();
  }, []);

  return (
    <Container>
      {myRides.map((item) => (
        <RequestItem key={String(item)} />
      ))}
    </Container>
  );
}

export default Requests;
