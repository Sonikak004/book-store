import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './book';
import { fetchBooks } from '../redux/books/booksSlice';

const BookList = () => {
  const { bookArray } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderBooks = () => {
    if (!bookArray || Object.keys(bookArray).length === 0) {
      return <h3>No Books Added</h3>;
    }

    return (
      <div>
        {Object.keys(bookArray).map((key) => (
          <Book
            key={key}
            id={key}
            author={bookArray[key][0].author}
            title={bookArray[key][0].title}
          />
        ))}
      </div>
    );
  };

  return renderBooks();
};

export default BookList;
