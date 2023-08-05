import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [titleError, setTitleError] = useState('');
  const [authorError, setAuthorError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setTitleError('');
    setAuthorError('');

    // Check if any input field is empty
    if (!title) {
      setTitleError('Title is required');
      return;
    }

    if (!author) {
      setAuthorError('Author is required');
      return;
    }

    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'book',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        {titleError && <p>{titleError}</p>}
      </div>
      <div>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        {authorError && <p>{authorError}</p>}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default NewBookForm;
