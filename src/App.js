import { Route, Routes } from 'react-router-dom';
/* eslint-disable */
import HomePage from './components/homePage';
import CategoriesPage from './components/categoriesPage';
/* eslint-enable */
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
