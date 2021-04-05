import React from 'react';
import { FiUser } from 'react-icons/fi';
import { Container, IconContainer, Info } from './styles';

function RankingItem({ data, index }) {
  return (
    <Container>
      <IconContainer>
        <FiUser size={24} color="#272727" />
      </IconContainer>

      <Info>
        <h1>{index + 1}º</h1>
        <h4>{data.nome}</h4>
      </Info>

      <section>
        <h1>{data.pontuacao}</h1>
      </section>
    </Container>
  );
}

export default RankingItem;
