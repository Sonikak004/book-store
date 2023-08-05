import { Route, Routes } from 'react-router-dom';
import './App.css';
// imports
import Books from './components/homePage';
import Categories from './components/categoriesPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
