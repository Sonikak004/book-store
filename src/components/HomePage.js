// src/components/HomePage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Book from './book';

function HomePage() {
  // Local state for new book input fields
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

  // Access books state from the Redux store
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  // Event handler for adding a new book
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

  // Event handler for removing a book
  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      <h2>Book List</h2>
      {books.map((book) => (
        <div key={book.item_id}>
          {/* Display individual book details */}
          <Book title={book.title} author={book.author} category={book.category} />
          {/* Button to remove the book */}
          <button type="button" onClick={() => handleRemoveBook(book.item_id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Add a New Book</h2>
      <div>
        <input
          type="text"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <input
          type="text"
          value={newBookAuthor}
          onChange={(e) => setNewBookAuthor(e.target.value)}
          placeholder="Author"
        />
      </div>
      <button type="button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
}

export default HomePage;
