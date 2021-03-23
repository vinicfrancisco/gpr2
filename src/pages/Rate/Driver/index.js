import { Form } from '@unform/web';
import React, { useCallback, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Radio from '~/components/Radio';
import { Container, FinishButton } from './styles';

const options = [
  {
    id: uuid(),
    value: 'Ótimo',
    label: 'Ótimo',
  },
  {
    id: uuid(),
    value: 'Bom',
    label: 'Bom',
  },
  {
    id: uuid(),
    value: 'Regular',
    label: 'Regular',
  },
  {
    id: uuid(),
    value: 'Ruim',
    label: 'Ruim',
  },
];

function RateDriver() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(() => {
    try {
      setLoading(true);
    } finally {
      setLoading(false);
    }
  }, []);

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
            <Radio name="coretesia" label="" options={options} />
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

export default RateDriver;
