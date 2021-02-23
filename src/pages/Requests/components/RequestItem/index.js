import React from 'react';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem() {
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
        <button type="button">
          <FiX size={36} color="#F32013" />
        </button>

        <button type="button">
          <FiCheck size={36} color="#5cb85c" />
        </button>
      </Buttons>
    </Container>
  );
}

export default RequestItem;
