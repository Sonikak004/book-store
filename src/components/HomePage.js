// src/components/HomePage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Book from './book';

function HomePage() {
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: `item${books.length + 1}`,
      title: newBookTitle,
      author: newBookAuthor,
      category: 'Unknown',
    };
    dispatch(addBook(newBook));
    setNewBookTitle('');
    setNewBookAuthor('');
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book.item_id}>
          <Book title={book.title} author={book.author} category={book.category} />
          <button type="submit" onClick={() => handleRemoveBook(book.item_id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Add a New Book</h2>
      <div>
        <input type="text" value={newBookTitle} onChange={(e) => setNewBookTitle(e.target.value)} />
      </div>
      <div>
        <input type="text" value={newBookAuthor} onChange={(e) => setNewBookAuthor(e.target.value)} />
      </div>
      <button type="submit" onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default HomePage;
