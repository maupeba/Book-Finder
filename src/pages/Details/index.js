import React, { useState } from 'react';

import { BiLike, BiHeart } from 'react-icons/bi';

import HoverRating from '../../components/Rating';

import {
  Container,
  Book,
  Content,
  ContentInfo,
  Title,
  ContainerDescription,
  ContainerFavorites,
  Button,
} from './styles';

const Details = ({ location }) => {
  const [favorite, setFavorite] = useState(false);
  const [like, setLike] = useState(false);
  const [colorFavorite, setColorFavorite] = useState('#2c2c2c');
  const [colorLike, setColorLike] = useState('#2c2c2c');

  const handleClickLike = () => {
    if (like === false) {
      setLike(true);
      setColorLike('#0000FF');
    } else {
      setLike(false);
      setColorLike('#2c2c2c');
    }
  };

  const handleClickFavorite = () => {
    if (favorite === false) {
      setFavorite(true);
      setColorFavorite('#FF0000');
    } else {
      setFavorite(false);
      setColorFavorite('#2c2c2c');
    }
  };

  const { title, thumbnail, authors, description, amount, pageCount } = location.state;
  return (
    <Container>
      <Content>
        <Book src={thumbnail} alt="Book" />
        <ContentInfo>
          <Title>{title}</Title>
          <span>by {authors[0]}</span>
          <div>
            <h2>R$ {amount}</h2>
            <HoverRating />
          </div>
        </ContentInfo>
      </Content>
      <ContainerFavorites>
        <span>{pageCount} pages</span>
        <div>
          <Button onClick={() => handleClickLike()}>
            <BiLike size={30} color={colorLike} />
          </Button>
          <Button onClick={() => handleClickFavorite()}>
            <BiHeart size={30} color={colorFavorite} />
          </Button>
        </div>
      </ContainerFavorites>
      <ContainerDescription>
        <p>{description}</p>
      </ContainerDescription>
    </Container>
  );
};

export default Details;
