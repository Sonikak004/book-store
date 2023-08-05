import React from 'react';
import NewBookForm from './NewBookForm';
import BookList from './BookList';
import BookProvider from './IndividualBook';

export default function HomePage() {
  return (
    <>
      <BookProvider>
        <div>
          <h1>Welcome to the Book Store</h1>
          <h2>Book List</h2>
          <BookList />
          <h2>Add a New Book</h2>
          <NewBookForm />
        </div>
      </BookProvider>
    </>
  );
}
