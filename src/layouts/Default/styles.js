import styled, { css } from 'styled-components';

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
    margin: auto;
  }

  > div {
    width: 36px;
  }
`;

export const Menu = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: -250px;
  padding: 32px 16px;
  position: absolute;
  transition: all 0.5s;
  top: 56px;
  width: 250px;
  z-index: 100;

  ${(props) =>
    props.open &&
    css`
      left: 0;
    `}

  ul {
    padding-left: 16px;

    a {
      color: #272727;
      font-size: 18px;
      font-weight: normal;
      text-decoration: none;
    }

    li + li {
      margin-top: 16px;
    }
  }
`;
