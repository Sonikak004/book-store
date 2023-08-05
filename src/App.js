import { Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/homePage';
import CategoriesPage from './components/categoriesPage';
import Navigation from './components/Navigation';

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
