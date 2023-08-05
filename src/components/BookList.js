import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IndividualBook from './IndividualBook';
import { removeBook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      {books.map((book) => (
        <IndividualBook
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default BookList;
