import React from 'react';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '~/services/api';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem({ data }) {
  const { push } = useHistory();

  async function handleApprove() {
    try {
      await api.get(`/carona/aprovar/${data.user_id}`);
      push('/home');
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDisapprove() {
    try {
      await api.get(`/carona/reprovar/${data.user_id}`);
      push('/home');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container>
      <IconContainer>
        <FiUser size={24} color="#272727" />
      </IconContainer>

      <Info>
        <h4>Caroneiro Xyz</h4>
        <span>Local: Praça do Centro</span>
        <span>Dias: Seg, Ter, e Qua</span>
        <span>Horário: 18h</span>
      </Info>

      <Buttons>
        <button type="button" onClick={() => handleDisapprove()}>
          <FiX size={36} color="#F32013" />
        </button>

        <button type="button" onClick={() => handleApprove()}>
          <FiCheck size={36} color="#5cb85c" />
        </button>
      </Buttons>
    </Container>
  );
}

export default RequestItem;
