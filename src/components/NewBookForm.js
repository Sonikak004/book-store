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
    <section id="bookForm" className="Text-Style-12 column">
      <span className="Title Title Text-Style-12">ADD NEW BOOK</span>
      <form className="input-div" onSubmit={handleSubmit}>
        <div className="title-div">
          <input
            type="text"
            name="title"
            id="titleInput"
            value={title}
            className="Text-Style-13"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          {titleError && <p>{titleError}</p>}
        </div>
        <div className="author-div">
          <input
            type="text"
            name="author"
            id="titleInput"
            value={author}
            className="Text-Style-13"
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />
          {authorError && <p>{authorError}</p>}
        </div>
        <button id="submit" type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default NewBookForm;
