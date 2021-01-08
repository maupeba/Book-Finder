import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import api from '../../services/api';

import Header from '../../components/Header';
import Button from '../../components/Button';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Container, Book, Content } from './styles';

const List = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const getBooks = async (value, resetResearch = false) => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `books/v1/volumes?q=${value}&startIndex=${startIndex}&maxResults=10`,
      );
      let newBooks = [];
      if (resetResearch) newBooks = [...data.items];
      else newBooks = [...books, ...data.items];
      setBooks(newBooks);
    } catch (err) {
      setError('Book not found');
    }
    setLoading(false);
  };

  const handleClickLoadMore = () => {
    getBooks();
    setStartIndex(startIndex + 10);
  };

  const renderBook = (book) => {
    if (
      book.saleInfo === undefined ||
      book.saleInfo === undefined ||
      book.volumeInfo.imageLinks === undefined ||
      book.saleInfo.listPrice === undefined
    )
      return null;
    const { id } = book;
    const { title, authors, description, pageCount } = book.volumeInfo;
    const { thumbnail } = book.volumeInfo.imageLinks;
    const { listPrice } = book.saleInfo;
    return (
      <Link
        to={{
          pathname: '/details',
          state: {
            title,
            thumbnail,
            authors,
            description,
            pageCount,
            amount: listPrice.amount,
          },
        }}
      >
        <Book key={id} src={thumbnail} alt="Book" />
      </Link>
    );
  };

  return (
    <Container>
      <Header searchBooks={getBooks} />
      <Content>{books.length > 0 ? books.map((book) => renderBook(book)) : null}</Content>
      {loading === true && <Loader type="Oval" color="#2c2c2c" height={30} width={30} />}
      {books.length > 0 && (
        <Button onClick={() => handleClickLoadMore()} type="submit">
          Load more
        </Button>
      )}
    </Container>
  );
};
export default List;
