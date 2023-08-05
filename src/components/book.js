import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, category }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
    </div>
  );
}

// PropTypes validation for the Book component
Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
