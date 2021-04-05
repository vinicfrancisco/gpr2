import React, { useEffect, useState } from 'react';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '~/services/api';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem({ data }) {
  const { push } = useHistory();

  const [myRide, setMyRide] = useState([]);

  useEffect(() => {
    async function loadMyRide() {
      try {
        const { data: ride } = await api.get(`/carona/${data.id}`);
        setMyRide(ride);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRide();
  }, []);

  async function handleApprove() {
    console.log(data);
    try {
      await api.get(`/carona/aprovar/${data.user_id}`);
      push('/home');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDisapprove() {
    try {
      await api.get(`/carona/reprovar/${data.user_id}`);
      push('/home');
    } catch (err) {
      console.log(err);
    }
  }
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

      <section>
        {data.aprovada === '1' ? (
          <>
            <Buttons>
              <button
                disabled
                type="button"
                onClick={() =>
                  push('/rate/hitchhiker', { idCarona: data.id, type: 2 })
                }
              >
                Aprovada
                <FiCheck size={36} color="#5cb85c" />
              </button>
            </Buttons>
          </>
        ) : (
          <Buttons>
            <button type="button" onClick={() => handleDisapprove()}>
              <FiX size={36} color="#F32013" />
            </button>

            <button type="button" onClick={() => handleApprove()}>
              <FiCheck size={36} color="#5cb85c" />
            </button>
          </Buttons>
        )}
      </section>
    </Container>
  );
}

export default RequestItem;
