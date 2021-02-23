import React from 'react';
import { Form } from '@unform/web';
import { v4 as uuid } from 'uuid';
import Checkbox from '~/components/Checkbox';
import { Container } from './styles';

const daysOptions = [
  { id: uuid(), value: 'week-days', label: 'Dias da semana' },
  { id: uuid(), value: 'monday', label: 'Segunda-feira' },
  { id: uuid(), value: 'tuesday', label: 'Terça-feira' },
  { id: uuid(), value: 'wednesday', label: 'Quarta-feira' },
  { id: uuid(), value: 'thursday', label: 'Quinta-feira' },
  { id: uuid(), value: 'friday', label: 'Sexta-feira' },
  { id: uuid(), value: 'saturday', label: 'Sábado' },
];

function RequestRide() {
  return (
    <Container>
      <section>
        <div>
          <strong>Motorista:</strong>

          <span>João da Silva</span>
        </div>

        <div>
          <strong>Origem:</strong>

          <span>Rio do Sul</span>
        </div>

        <div>
          <strong>Horário:</strong>

          <span>18h</span>
        </div>

        <div>
          <strong>Vagas disponíveis:</strong>

          <span>2 vagas</span>
        </div>

        <div>
          <strong>Dias disponíveis:</strong>
        </div>

        <Form>
          <Checkbox name="days" options={daysOptions} />
        </Form>

        <button type="button" onClick={() => null}>
          SOLICITAR
        </button>
      </section>
    </Container>
  );
}

export default RequestRide;
