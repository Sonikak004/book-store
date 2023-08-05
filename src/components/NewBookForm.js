import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
}

NewBookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default NewBookForm;
