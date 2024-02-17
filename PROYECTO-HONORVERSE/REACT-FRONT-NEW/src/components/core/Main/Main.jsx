import LogOut from './LogOut';
import ActualUser from './ActualUser';
import { Link } from 'react-router-dom';
import '../Main/Main.scss';

const Main = () => {
  return (
    <>
      <div>
        <ActualUser />
        <LogOut />
        <ul className="main-pages-list">
          <li className="main-pages-list-books">
            <h3>Lista de Libros</h3>
            <button className="main-pages-list-button"><Link to="/main/PageBooks">
              Abrir
            </Link></button>
          </li>
          <li className="main-pages-list-planets">
            <h3>Lista de Planetas</h3>
            <button className="main-pages-list-button"><Link to="/main/PagePLanets">
              Abrir
            </Link></button>
          </li>
          <li className="main-pages-list-countries">
            <h3>Lista de Paises</h3>
            <button className="main-pages-list-button"><Link to="/main/PageCountries">
              Abrir
            </Link></button>
          </li>
          <li className="main-pages-list-characters">
            <h3>Lista de Personajes</h3>
            <button className="main-pages-list-button"><Link to="/main/PageCharacters">
              Abrir
            </Link></button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
