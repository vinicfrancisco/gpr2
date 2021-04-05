import React, { useEffect, useState } from 'react';
import { FiUser, FiStar } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '~/services/api';
import { Container, IconContainer, Info, Buttons } from './styles';

function EvaluationItem({ data }) {
  const [evaluationName, setEvaluationName] = useState('');
  const [evaluationType, setEvaluationType] = useState();

  console.log(data)
  useEffect(() => {
    async function loadMyRide() {
      let aux = data.motorista_id;
      setEvaluationType(1);
      if (localStorage.TOKEN_KEY === data.motorista_id) {
        aux = data.user_id;
        setEvaluationType(2);
      }
      try {
        const { data: name } = await api.get(`/users/${aux}`);

        setEvaluationName(name.name);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRide();
  }, [data]);

  const { push } = useHistory();
  return (
    <Container>
      <IconContainer>
        <FiUser size={24} color="#272727" />
      </IconContainer>

      <Info>
        <h4>{evaluationName}</h4>
        <h4>Semana: {data.semana}</h4>
      </Info>

      <Buttons>
        {evaluationType === 1 ? (
          <button
            type="button"
            onClick={() => push('/rate/driver', { idCarona: data.id })}
          >
            Avaliar <FiStar size={30} color="#ffa500" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => push('/rate/hitchhiker', { idCarona: data.id })}
          >
            Avaliar <FiStar size={30} color="#ffa500" />
          </button>
        )}
      </Buttons>
    </Container>
  );
}

export default EvaluationItem;
