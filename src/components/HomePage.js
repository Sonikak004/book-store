import React from 'react';
import NewBookForm from './NewBookForm';
import BookList from './BookList';
import BookProvider from './IndividualBook';

export default function HomePage() {
  return (
    <>
      <BookProvider>
        <div className="wrapper">
          <BookList />
          <NewBookForm />
        </div>
      </BookProvider>
    </>
  );
}
