import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage'; // Corrected the import name
import CategoriesPage from './components/categoriesPage';
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
