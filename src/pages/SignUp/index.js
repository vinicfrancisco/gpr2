import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FaCarAlt } from 'react-icons/fa';
import Input from '~/components/Input';
import api from '~/services/api';
import { Container, LoginButton, IconContainer } from './styles';

function SignUp() {
  const { push } = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        if (data.email.includes('udesc.br')) {
          if (data.password === data.confirmPass) {
            await api.post('/user/create', {
              name: data.name,
              email: data.email,
              password: data.password,
            });

            push('/');
          }
        }
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
      <IconContainer>
        <FaCarAlt size={50} color="#272727" />
      </IconContainer>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Digite seu Nome Completo" />
        <Input name="email" type="email" placeholder="Digite seu E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input
          name="confirmPass"
          type="password"
          placeholder="Confirme sua Senha"
        />

        <LoginButton disabled={loading} type="submit">
          Registrar
        </LoginButton>
      </Form>
    </Container>
  );
}

export default SignUp;
