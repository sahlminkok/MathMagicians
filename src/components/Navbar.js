import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <h1>
          <Link to="/">Math Magicians</Link>
        </h1>
      </li>
      <div className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navbar;
