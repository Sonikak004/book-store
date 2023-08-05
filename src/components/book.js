import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" id={id} onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
