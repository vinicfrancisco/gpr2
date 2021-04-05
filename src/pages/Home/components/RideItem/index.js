import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import api from '~/services/api';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem({ data }) {
  const [myRide, setMyRide] = useState([]);
  const [motoristaName, setMotoristaName] = useState([]);

  const { push } = useHistory();

  useEffect(() => {
    async function loadMyRide() {
      try {
        const { data: ride } = await api.get(`/carona/${data.id}`);
        const { data: name } = await api.get(`/users/${ride.motorista}`);
        setMyRide(ride);
        setMotoristaName(name.name);
      } catch (err) {
        console.log(err);
      }
    }

    loadMyRide();
  }, [data]);

  return (
    <Container>
      <IconContainer>
        <FiUser size={24} color="#272727" />
      </IconContainer>

      <Info>
        <h4>{motoristaName}</h4>
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
                  push('/rate/driver', { idCarona: data.id, type: 1 })
                }
              >
                Aprovada <FiCheck size={36} color="#5cb85c" />
              </button>
            </Buttons>
          </>
        ) : (
          <Buttons>
            <button type="button">
              Aguardando aprovação <FiX size={36} color="#F32013" />
            </button>
          </Buttons>
        )}
      </section>
    </Container>
  );
}

export default RequestItem;
