import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';
import Input from '~/components/Input';
import Checkbox from '~/components/Checkbox';
import api from '~/services/api';
import { Container, FinishButton } from './styles';

const daysOptions = [
  { id: uuid(), value: 'Dias da semana', label: 'Dias da semana' },
  { id: uuid(), value: 'Seg', label: 'Segunda-feira' },
  { id: uuid(), value: 'Ter', label: 'Terça-feira' },
  { id: uuid(), value: 'Qua', label: 'Quarta-feira' },
  { id: uuid(), value: 'Qui', label: 'Quinta-feira' },
  { id: uuid(), value: 'Sex', label: 'Sexta-feira' },
  { id: uuid(), value: 'Sab', label: 'Sábado' },
];

function Availability() {
  const { push } = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        await api.post('/carona', {
          origem: data.location,
          vagasDisponiveis: data.quantity,
          diasDisponiveis: data.days.join(', '),
          motorista: localStorage.TOKEN_KEY,
          horario: data.time,
          contato: data.contact,
        });

        push('/rides');
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    },
    [push]
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
          <button disabled={loading} type="submit">
            Confirmar
          </button>
        </FinishButton>
      </Form>
    </Container>
  );
}

export default Availability;
