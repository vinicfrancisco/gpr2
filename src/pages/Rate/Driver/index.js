import { Form } from '@unform/web';
import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useLocation, useHistory } from 'react-router-dom';
import Radio from '~/components/Radio';
import api from '~/services/api';
import { Container, FinishButton } from './styles';

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

function RateDriver() {
  const history = useHistory();
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        await api.post('/carona/avaliar', {
          idCarona: state.idCarona,
          tipoAvaliacao: '1',
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
          <h2>Direção</h2>

          <main>
            <Radio name="direcao" label="" options={options} />
          </main>
        </section>

        <section>
          <h2>Cortesia</h2>

          <main>
            <Radio name="cortesia" label="" options={options} />
          </main>
        </section>

        <FinishButton>
          <button
            disabled={loading}
            type="submit"
            onClick={() => history.goBack()}
          >
            Confirmar
          </button>
        </FinishButton>
      </Form>
    </Container>
  );
}

export default RateDriver;
