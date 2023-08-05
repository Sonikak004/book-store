import { Route, Routes } from 'react-router-dom';
import './App.css';
/* eslint-disable */
import Books from './components/homePage';
import Categories from './components/categoriesPage';
/* eslint-enable */
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
