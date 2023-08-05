import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author, category }) {
  return (
    <div>
      <h2>{title}</h2>
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

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
