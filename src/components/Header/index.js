import React, { useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';

import { Container, Input, ButtonSearch } from './styles';

const Header = ({ searchBooks }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Container>
      <Input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
        placeholder="Type a book"
      />
      <ButtonSearch type="submit" onClick={() => searchBooks(inputValue, true)}>
        <BiSearchAlt size={30} color="#2c2c2c" />
      </ButtonSearch>
    </Container>
  );
};

export default Header;
