import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <h1>Bookstore</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}
