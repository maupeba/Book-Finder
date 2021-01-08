import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fde910;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const Book = styled.img`
  box-shadow: -15px 15px 15px #646464;
  height: 200px;
  width: 150px;
  border: 1px solid #fff;
  border-radius: 5px;
`;
