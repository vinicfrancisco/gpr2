import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from './styles';

function RequestRide() {
  const { state } = useLocation();

  return (
    <Container>
      <section>
        <div>
          <strong>Motorista:</strong>

          <span>{state?.ride.motorista || ''}</span>
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

        <button type="button" onClick={() => null}>
          SOLICITAR
        </button>
      </section>
    </Container>
  );
}

export default RequestRide;
