import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';
import api from '~/services/api';

function RequestRide() {
  const { state } = useLocation();

  useEffect(() => {
    async function loadRides() {
      try {
        const res = await api.get(`/user/motorista/${state.ride.motorista}`);
        console.log(res.data.name);
      } catch (err) {
        console.log(err);
      }
    }
    loadRides();
  }, [state]);

  async function handleSubmit() {
    try {
      await api.post(`/carona/solicitar`, {
        idCarona: state.ride.id,
        idUser: localStorage.TOKEN_KEY,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <section>
        <div>
          <strong>Motorista:</strong>

          <span>{state?.ride.name || ''}</span>
        </div>

        <div>
          <strong>Origem:</strong>

          <span>{state?.ride.origem || ''}</span>
        </div>

        <div>
          <strong>Horário:</strong>

          <span>{state?.ride.horario || ''}</span>
        </div>

        <div>
          <strong>Vagas disponíveis:</strong>

          <span>{`${state?.ride.vagasDisponiveis || '0'} vagas`}</span>
        </div>

        <div>
          <strong>Dias disponíveis:</strong>

          <span>{state?.ride.diasDisponiveis}</span>
        </div>

        <button type="button" onClick={() => handleSubmit()}>
          SOLICITAR
        </button>
      </section>
    </Container>
  );
}

export default RequestRide;
