import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function IndividualBook({ id, title, author }) {
  const dispatch = useDispatch();

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <button type="button" onClick={() => handleDeleteBook(id)}>Delete</button>
    </div>
  );
}

IndividualBook.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default IndividualBook;
