import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import RequestItem from './components/RequestItem';
import { Container } from './styles';

function Requests() {
  const [myRides, setMyRides] = useState([]);

  useEffect(() => {
    async function loadMyRides() {
      try {
        const { data } = await api.get(
          `/carona/motorista/${localStorage.TOKEN_KEY}`
        );
        setMyRides(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRides();
  }, []);

  return (
    <Container>
      {myRides?.map((item) => (
        <RequestItem data={item} key={String(item)} />
      ))}
    </Container>
  );
}

export default Requests;
