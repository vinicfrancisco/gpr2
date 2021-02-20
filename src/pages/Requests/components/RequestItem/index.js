import React from 'react';
import { FiUser, FiCheck, FiX } from 'react-icons/fi';
import { Container, IconContainer, Info, Buttons } from './styles';

function RequestItem() {
  return (
    <Container>
      <IconContainer>
        <FiUser size={16} color="#272727" />
      </IconContainer>

      <Info />

      <Buttons>
        <button type="button">
          <FiX size={16} color="#F32013" />
        </button>

        <button type="button">
          <FiCheck size={16} color="#5cb85c" />
        </button>
      </Buttons>
    </Container>
  );
}

export default RequestItem;
