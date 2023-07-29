import React from 'react';
import PropTypes from 'prop-types';
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
          onDelete={onDelete}
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
