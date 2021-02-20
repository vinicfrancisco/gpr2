import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #911919;
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;

  button {
    align-items: center;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
  }

  h1 {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }

  > div {
    width: 36px;
  }
`;
