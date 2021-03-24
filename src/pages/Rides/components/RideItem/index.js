import React from 'react';
import { useHistory } from 'react-router-dom';
import { FaCarAlt } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Container, IconContainer, Info } from './styles';

function RideItem({ data }) {
  const { push } = useHistory();

  return (
    <Container onClick={() => push('/request-ride', { ride: data })}>
      <IconContainer>
        <FaCarAlt size={24} color="#272727" />
      </IconContainer>

      <Info>
        <span>{`Origem: ${data.origem}`}</span>
        <span>{`Horário: ${data.horario}`}</span>
      </Info>

      <FiChevronRight size={50} color="#d3d3d3" />
    </Container>
  );
}

export default RideItem;
