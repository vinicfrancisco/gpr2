import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import EvaluationItem from './EvaluationItem';
import { Container } from './styles';

function Evaluation() {
  const [evaluations, setEvaluation] = useState([]);

  useEffect(() => {
    async function loadMyRides() {
      try {
        const { data } = await api.get(
          `/carona/user/${localStorage.TOKEN_KEY}`
        );
        setEvaluation(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRides();
  }, []);

  return (
    <Container>
      {evaluations?.map((item) => (
        <>
          {item.avaliado === '0' && (
            <EvaluationItem data={item} key={String(item)} />
          )}
        </>
      ))}
    </Container>
  );
}

export default Evaluation;
