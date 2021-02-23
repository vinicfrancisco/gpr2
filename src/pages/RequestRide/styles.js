import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px;
  width: 100%;

  > section {
    border: 1px solid #d3d3d3;
    display: flex;
    flex-direction: column;
    padding: 16px 12px;
    width: 100%;

    strong {
      color: #272727;
      font-size: 16px;
      font-weight: bold;
    }

    span {
      color: #272727;
      font-size: 16px;
      font-weight: normal;
      margin-left: 4px;
    }

    > div {
      display: flex;
      margin-bottom: 8px;
    }

    button {
      align-items: center;
      background: #5cb85c;
      border: none;
      border-radius: 8px;
      color: #fff;
      display: flex;
      height: 46px;
      justify-content: center;
      margin-top: 60px;
      text-transform: uppercase;
      transition: all 0.5s;
      width: 100%;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
