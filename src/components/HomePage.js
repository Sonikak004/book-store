import NewBookForm from './NewBookForm';
import BookList from './BookList';
import BookProvider from './IndividualBook';

const homePage = () => (
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
export default homePage;
