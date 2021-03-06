import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 16px;
  width: 100%;

  > form {
    > section {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      width: 100%;

      > h2 {
        color: #272727;
        font-size: 16px;
        font-weight: bold;
        margin-top: 8px;
      }

      > main {
        align-items: flex-start;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        margin-top: 8px;
        width: 100%;
      }
    }
  }
`;

export const FinishButton = styled.div`
  background: #fff;
  border-top: 1px solid #d3d3d3;
  bottom: 0;
  left: 0;
  padding: 16px;
  position: fixed;
  width: 100%;
  z-index: 10;

  button {
    align-items: center;
    background: #b43838;
    border: none;
    border-radius: 8px;
    color: #fff;
    display: flex;
    height: 46px;
    justify-content: center;
    text-transform: uppercase;
    transition: all 0.5s;
    width: 100%;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
