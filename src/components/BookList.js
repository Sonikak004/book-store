// src/components/BookList.js
import PropTypes from 'prop-types';
import React from 'react';
import IndividualBook from './IndividualBook';

function BookList({ books, onDelete }) {
  return (
    <div>
      {books.map((book) => (
        <IndividualBook
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          onDelete={onDelete} // Make sure onDelete is a function that handles book deletion
        />
      ))}
    </div>
  );
}

// PropTypes validation for the BookList component
BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
