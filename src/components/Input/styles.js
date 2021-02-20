import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;

  label {
    color: #272727;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    color: #272727;
    font-size: 16px;
    font-weight: normal;
    height: 46px;
    padding: 0 8px;
    width: 100%;
  }
`;
