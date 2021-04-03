import React, { useCallback, useEffect, useState } from 'react';
import { Form } from '@unform/web';
import { useLocation, useHistory } from 'react-router-dom';
import { Container } from './styles';
import api from '~/services/api';

import DatePicker from '~/components/Datepicker';

function RequestRide() {
  const { state } = useLocation();
  const { push } = useHistory();
  const [motoristaName, setMotoristaName] = useState('');

  useEffect(() => {
    async function loadRides() {
      try {
        const { data } = await api.get(`/users/${state.ride.motorista}`);
        setMotoristaName(data.name);
      } catch (err) {
        console.log(err);
      }
    }
    loadRides();
  }, [state, motoristaName]);

  const handleSubmit = useCallback(async (data) => {
    console.log(data);
    try {
      await api.post(`/carona/solicitar`, {
        idCarona: state.ride.id,
        idUser: localStorage.TOKEN_KEY,
        dataFim: data.dataFim,
      });
      push('/home');
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Container>
      <section>
        <div>
          <strong>Motorista:</strong>

          <span>{motoristaName || ''}</span>
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

        <Form onSubmit={handleSubmit}>
          <DatePicker name="dataFim" label="Data Fim" />
          <button type="submit">SOLICITAR</button>
        </Form>
      </section>
    </Container>
  );
}

export default RequestRide;
