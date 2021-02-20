import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { v4 as uuid } from 'uuid';
import Input from '~/components/Input';
import Checkbox from '~/components/Checkbox';
import { Container, FinishButton } from './styles';

const daysOptions = [
  { id: uuid(), value: 'week-days', label: 'Dias da semana' },
  { id: uuid(), value: 'monday', label: 'Segunda-feira' },
  { id: uuid(), value: 'tuesday', label: 'Terça-feira' },
  { id: uuid(), value: 'wednesday', label: 'Quarta-feira' },
  { id: uuid(), value: 'thursday', label: 'Quinta-feira' },
  { id: uuid(), value: 'friday', label: 'Sexta-feira' },
  { id: uuid(), value: 'saturday', label: 'Sábado' },
];

function Availability() {
  const handleSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          name="driver"
          label="Motorista"
          placeholder="Digite o nome do motorista"
        />

        <Input
          name="time"
          label="Horário de saída"
          placeholder="Digite o horário de saída"
        />

        <Input
          name="quantity"
          label="Quantidade de passageiros"
          placeholder="Digite a quantidade de passageiros"
        />

        <Input
          name="location"
          label="Local de origem"
          placeholder="Digite o local de origem"
        />

        <Input
          name="contact"
          label="Contato"
          placeholder="Digite o seu contato"
        />

        <Checkbox name="days" options={daysOptions} />

        <FinishButton>
          <button type="submit">Confirmar</button>
        </FinishButton>
      </Form>
    </Container>
  );
}

export default Availability;
