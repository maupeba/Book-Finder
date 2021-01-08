import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #a5f1c0;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 200px;
  font-weight: 500;
  margin-top: 16px;
  margin-bottom: 30px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.1, '#a5f1c0')};
  }
`;
