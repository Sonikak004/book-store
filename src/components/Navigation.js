import { NavLink } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';

export default function Navigation() {
  return (
    <nav className="navbar row">
      <h1 className="Text-Style-3 head">Bookstore CMS</h1>
      <ul className="row">
        <li>
          <NavLink className="link Text-Style-6" to="/">Books</NavLink>
        </li>
        <li>
          <NavLink className="link Text-Style-6" to="/categories">Categories</NavLink>
        </li>
      </ul>
      <span className="userbadge">
        <FaUserShield />
      </span>
    </nav>
  );
}
