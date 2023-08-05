import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CategoriesPage from './components/CategoriesPage';
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
