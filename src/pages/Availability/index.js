import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { v4 as uuid } from 'uuid';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Input from '~/components/Input';
import Checkbox from '~/components/Checkbox';
import DatePicker from '~/components/Datepicker';
import api from '~/services/api';
import { Container, FinishButton } from './styles';
import getValidationErrors from '~/utils/getValidationErrors';

const daysOptions = [
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

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        // const schema = Yup.object().shape({
        //   driver: Yup.string().required('Campo Motorista é obrigatório.'),
        //   time: Yup.string().required('Campo Horário de saída é obrigatório.'),
        //   quantity: Yup.string().required(
        //     'Campo Quantidade de passageiros é obrigatório.'
        //   ),
        //   location: Yup.string().required(
        //     'Campo Local de origem é obrigatório.'
        //   ),
        //   contact: Yup.string().required(
        //     'Campo Contato de origem é obrigatório.'
        //   ),
        //   days: Yup.string().required('Informe pelo menos um dia'),
        // });

        // await schema.validate(data, {
        //   abortEarly: false,
        // });
        console.log(data);
        await api.post('/carona', {
          origem: data.location,
          vagasDisponiveis: data.quantity,
          diasDisponiveis: data.days.join(', '),
          motorista: localStorage.TOKEN_KEY,
          dataInicio: data.dataInicio,
          dataFim: data.dataFim,
          horario: data.time,
          contato: data.contact,
        });

        push('/rides');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current.setErrors(errors);
        }
      } finally {
        setLoading(false);
      }
    },
    [push]
  );

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSubmit}>
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
        <DatePicker name="dataInicio" label="Data Inicio" />
        <DatePicker name="dataFim" label="Data Fim" />

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
