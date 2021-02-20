import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > label + label {
    margin-top: 8px;
  }

  > label {
    color: #272727;
    font-size: 16px;
    font-weight: normal;

    > input {
      margin-right: 4px;
    }
  }
`;
