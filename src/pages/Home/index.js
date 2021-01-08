import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content } from './styles';

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Content>
        <div>
          <h1>Welcome to BookLibrary</h1>
          <span>Your book finder website</span>
        </div>
        <Button onClick={() => history.push('/list')} type="submit">
          Find Books
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
