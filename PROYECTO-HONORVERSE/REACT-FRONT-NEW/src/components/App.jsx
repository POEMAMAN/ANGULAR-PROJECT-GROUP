import { Route, Routes } from 'react-router-dom';
import Login from './core/Login/';
import Register from './core/Register';
import Header from './core/Header';
import Home from './core/Home';
import Main from './core/Main/Main';
import AuthRoute from './core/AuthRoutes';
import Footer from './core/Footer';
import PageBooks from './core/Main/PageBooks/PageBooks';
import PagePlanets from './core/Main/PagePlanets/PagePlanets';
import PageCountries from './core/Main/PageCountries/PageCountries';
import PageCharacters from './core/Main/PageCharacters/PageCharacters';


const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<AuthRoute component={<Main />} />} />
          <Route path="/main/PageBooks" element={<AuthRoute component={<PageBooks />} />} />
          <Route path="/main/pagePlanets" element={<AuthRoute component={<PagePlanets />} />} />
          <Route path="/main/pageCountries" element={<AuthRoute component={<PageCountries />} />} />
          <Route path="/main/pageCharacters" element={<AuthRoute component={<PageCharacters />} />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
