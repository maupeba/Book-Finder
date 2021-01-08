import styled from 'styled-components';

export const Container = styled.div`
  background: #fde910;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  border: none;
  color: #2c2c2c;
  border-bottom: 1px solid #acacac;
  border-radius: 50px;
  background: #fde910;
  margin: 30px 10px 30px 0;
  text-align: center;
  @media (min-width: 600px) {
    width: 400px;
  }
`;

export const ButtonSearch = styled.button`
  border: none;
  background: #fde910;

  &:hover {
    cursor: pointer;
  }
`;
