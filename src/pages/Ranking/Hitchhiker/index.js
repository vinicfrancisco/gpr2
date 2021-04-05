import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import RankingItem from './RankingItem';
import { Container } from './styles';

function RankingHitchhiker() {
  const [rankings, setRanking] = useState([]);

  useEffect(() => {
    async function loadMyRides() {
      try {
        const { data } = await api.get(`avaliacao/ranking/2`);
        setRanking(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRides();
  }, []);

  return (
    <Container>
      {rankings?.map((item, index) => (
        <RankingItem data={item} index={index} key={String(item)} />
      ))}
    </Container>
  );
}

export default RankingHitchhiker;
