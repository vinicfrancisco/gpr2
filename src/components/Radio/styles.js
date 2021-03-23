import styled from 'styled-components';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;

  > span + span {
    margin-top: 16px;
  }

  input {
    margin-right: 8px;
  }
`;
