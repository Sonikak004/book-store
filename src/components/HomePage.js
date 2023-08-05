import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from './BookList';
import NewBookForm from './NewBookForm';
import { addBook } from '../redux/books/booksSlice';

function HomePage() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      <h2>Book List</h2>
      <BookList books={books} />

      <h2>Add a New Book</h2>
      <NewBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default HomePage;
