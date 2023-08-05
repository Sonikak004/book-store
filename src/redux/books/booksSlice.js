import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HP3OLe1gZG4FCx0EZVr9/books';

const fetchBooksAPI = async (apiUrl) => {
  try {
    const response = await axios(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const data = await fetchBooksAPI(apiUrl);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const addBookAPI = async (apiUrl, newBook) => {
  try {
    const response = await axios.post(apiUrl, newBook);
    return response.data;
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const addBook = createAsyncThunk('books/addBook', async (newBook, thunkAPI) => {
  try {
    const data = await addBookAPI(apiUrl, newBook);
    thunkAPI.dispatch(fetchBooks());
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const removeBookAPI = async (endPoint) => {
  const removeURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HP3OLe1gZG4FCx0EZVr9/books/${endPoint}`;
  try {
    const response = await axios.delete(removeURL);
    return response.data;
  } catch (error) {
    throw new Error(`${error.code}: ${error.message}`);
  }
};

export const removeBook = createAsyncThunk('books/removeBook', async (endPoint, thunkAPI) => {
  try {
    const data = await removeBookAPI(endPoint);
    thunkAPI.dispatch(fetchBooks());
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  bookArray: [],
  isLoading: false,
  error: null,
  added: null,
  removed: null,
};

// Extra reducers functions
const setLoadingState = (state) => {
  state.isLoading = true;
};

const updateBookArray = (state, action) => {
  state.isLoading = false;
  state.bookArray = action.payload;
  state.error = null;
};

const handleFetchError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setAddingState = (state) => {
  state.added = 'sending...';
};

const updateAddedStatus = (state, action) => {
  state.added = action.payload.data;
};

const handleAddError = (state, action) => {
  state.added = action.payload.data;
};

const setRemovingState = (state) => {
  state.removed = 'sending...';
};

const updateRemovedStatus = (state, action) => {
  state.removed = action.payload.data;
};

const handleRemoveError = (state, action) => {
  state.removed = action.payload.data;
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Books
    builder.addCase(fetchBooks.pending, setLoadingState)
      .addCase(fetchBooks.fulfilled, updateBookArray)
      .addCase(fetchBooks.rejected, handleFetchError);

    // Add Book
    builder.addCase(addBook.pending, setAddingState)
      .addCase(addBook.fulfilled, updateAddedStatus)
      .addCase(addBook.rejected, handleAddError);

    // Remove Book
    builder.addCase(removeBook.pending, setRemovingState)
      .addCase(removeBook.fulfilled, updateRemovedStatus)
      .addCase(removeBook.rejected, handleRemoveError);
  },
});

export default bookSlice.reducer;
