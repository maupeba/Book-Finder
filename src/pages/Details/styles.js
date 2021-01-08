import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fde910;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 400px;
  margin: 30px 0;
  background: #fde910;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  background: #fde910;

  > span {
    font-size: 14px;
    margin: 10px 0;
  }

  span {
    margin-top: 5px;
  }
`;

export const Title = styled.h1`
  color: #2c2c2c;
  max-width: 400px;
  font-size: 18px;
`;

export const Book = styled.img`
  box-shadow: -10px 10px 10px #646464;
  height: 200px;
  width: 150px;
  border: 1px solid #fff;
  border-radius: 5px;
`;

export const ContainerDescription = styled.div`
  height: 100vh;
  background: #fff;
  border-top: 1px solid #acacac;

  p {
    color: #323232;
    font-size: 14px;
    text-align: center;
    margin: 60px;
    font-family: 'Playfair Display';
  }
`;

export const ContainerFavorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;

  span {
    font-size: 13px;
    color: #646464;
    margin: 0 70px;
  }

  svg {
    margin: 10px 30px;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.1, '#a5f1c0')};
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: #fde910;

  &:hover {
    cursor: pointer;
  }
`;
