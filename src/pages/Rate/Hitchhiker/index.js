import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { v4 as uuid } from 'uuid';
import { useLocation } from 'react-router-dom';
import Radio from '~/components/Radio';
import { Container, FinishButton } from './styles';
import api from '~/services/api';

const options = [
  {
    id: uuid(),
    value: 1,
    label: 'Bom',
  },
  {
    id: uuid(),
    value: 0,
    label: 'Neutro',
  },
  {
    id: uuid(),
    value: -1,
    label: 'Ruim',
  },
];

function RateHitchhiker() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        await api.post('/request', {
          idCarona: state.idCarona,
          tipoAvaliacao: 2,
          cortesia: data.cortesia,
          pontualidade: data.pontualidade,
          direcao: data.direcao,
        });
      } finally {
        setLoading(false);
      }
    },
    [state]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <section>
          <h2>Pontualidade</h2>

          <main>
            <Radio name="pontualidade" label="" options={options} />
          </main>
        </section>

        <section>
          <h2>Cortesia</h2>

          <main>
            <Radio name="cortesia" label="" options={options} />
          </main>
        </section>

        <FinishButton>
          <button disabled={loading} type="submit">
            Confirmar
          </button>
        </FinishButton>
      </Form>
    </Container>
  );
}

export default RateHitchhiker;
