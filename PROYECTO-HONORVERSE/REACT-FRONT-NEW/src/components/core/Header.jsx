import { Link } from 'react-router-dom';
import '../core/Header.scss';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-container-title">Honorverse World</h1>
      <nav className="header-container-nav">
        <ul className="header-container-nav-titleList">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <Link to="/main">Consulta interactiva</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
