import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import api from '~/services/api';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem({ data }) {
  const [myRide, setMyRide] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    async function loadMyRide() {
      try {
        const { data: ride } = await api.get(`/carona/${data.user_id}`);
        setMyRide(ride);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRide();
  }, []);

  return (
    <Container>
      <IconContainer>
        <FiUser size={24} color="#272727" />
      </IconContainer>

      <Info>
        <h4>Caroneiro Xyz</h4>
        <span>Local: {myRide.origem}</span>
        <span>{myRide.diasDisponiveis}</span>
        <span>Horário: {myRide.horario}</span>
      </Info>

      {data.aprovada === '1' ? (
        <Buttons>
          <button type="button" onClick={() => push('/rate/driver')}>
            Carona Aprovada <FiCheck size={36} color="#5cb85c" />
          </button>
        </Buttons>
      ) : (
        <Buttons>
          <button type="button">
            Carona ainda não aprovada <FiX size={36} color="#F32013" />
          </button>
        </Buttons>
      )}
    </Container>
  );
}

export default RequestItem;
