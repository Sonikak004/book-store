import { Route, Routes } from 'react-router-dom';
import homePage from './components/homePage';
import CategoriesPage from './components/categoriesPage';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<homePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
