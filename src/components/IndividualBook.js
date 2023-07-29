import React, { useState } from 'react';
import PropTypes from 'prop-types';

function IndividualBook({
  id, title, author, onDelete,
}) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Call the onDelete function passed from the BookList component
    onDelete(id);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Author:
        {' '}
        {author}
      </p>
      {isDeleting ? <p>Deleting...</p>
        : <button type="submit" onClick={handleDelete}>Delete</button>}
    </div>
  );
}

// PropTypes validation for the IndividualBook component
IndividualBook.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
