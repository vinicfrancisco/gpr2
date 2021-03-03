import React, { useCallback, useState } from 'react';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FaCarAlt } from 'react-icons/fa';
import Input from '~/components/Input';
import api from '~/services/api';
import { Container, LoginButton, IconContainer, A } from './styles';

function SignIn() {
  const { push } = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);

        await api.post('/auth/login', {
          email: data.email,
          password: data.password,
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
      <IconContainer>
        <FaCarAlt size={50} color="#272727" />
      </IconContainer>
      <Form onSubmit={handleSubmit}>
        <Input name="user" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />

        <LoginButton disabled={loading} type="submit">
          Entrar
        </LoginButton>
      </Form>
      <br />
      <A href="/signup">Ainda não possui conta? Registre-se</A>
    </Container>
  );
}

export default SignIn;
