import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/homePage.js';
import CategoriesPage from './components/categoriesPage.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
