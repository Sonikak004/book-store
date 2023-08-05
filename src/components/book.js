import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

function Book({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <div className="bookCard row">
      <div className="details">
        <div className="bookDetails column">
          <span className="Text-Style-9 category">Book</span>
          <span className="Text-Style-5"><h2>{title}</h2></span>
          <span className="Text-Style-8 author">{author}</span>
        </div>
        <div className="buttons">
          <button type="button" className="Text-Style-8 blue-text">Comments</button>
          <button type="button" id={id} onClick={() => dispatch(removeBook(id))} className="Text-Style-8 blue-text">
            Remove
          </button>
          <button type="button" className="Text-Style-8 blue-text">Edit</button>
        </div>
      </div>
      <div className="stats row">
        <div className="progres">
          <CircularProgressbar
            value={7}
            styles={buildStyles({
              pathColor: '#307bbe',
              trailColor: '#e8e8e8',
            })}
          />
        </div>
        <div className="numbers column">
          <span className="Text-Style-10">7%</span>
          <span className="Text-Style-2 pale">Completed</span>
        </div>
        <div className="overview column">
          <span className="Text-Style-7 pale">CURRENT CHAPTER</span>
          <span className="Text-Style-4">Chapter 7</span>
          <button type="button" className="Text-Style-11">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
