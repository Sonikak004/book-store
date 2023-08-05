import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  bookCollection: null,
};

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOK_COLLECTION':
      return { ...state, bookCollection: action.payload };
    default:
      return state;
  }
};

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  return (
    <BookContext.Provider value={{ bookCollection: state.bookCollection, setBookCollection: (collection) => dispatch({ type: 'SET_BOOK_COLLECTION', payload: collection }) }}>
      {children}
    </BookContext.Provider>
  );
};

BookProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BookProvider;
