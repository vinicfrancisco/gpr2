import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 16px 0 12px 16px;
  width: 100%;
`;

export const IconContainer = styled.div`
  align-items: center;
  border-radius: 20px;
  border: 1px solid #272727;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: 16px;
  width: 40px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h4 {
    color: #272727;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  span {
    color: #272727;
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 2px;
  }
`;
