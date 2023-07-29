import React, { useState } from 'react';
import BookList from './BookList';
import NewBookForm from './NewBookForm';

function HomePage() {
  // Sample book data for demonstration purposes
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
  ]);

  // Function to add a new book to the book list
  const handleAddBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, title: newBook.title, author: newBook.author }]);
  };

  // Function to delete a book from the book list
  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Welcome to the Book Store</h1>
      <h2>Book List</h2>
      <BookList books={books} onDelete={handleDeleteBook} />

      <h2>Add a New Book</h2>
      <NewBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default HomePage;
