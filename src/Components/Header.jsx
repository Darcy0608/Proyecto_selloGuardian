//import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="nav-menu">
      <a href="/">Inicio</a>
      <Link to="/adopta">Adopta</Link>
      <Link to="/denuncia">Denuncia</Link>
      <Link to="/registro" className="btn-reg">Registrarse</Link>
    </nav>
  </header>
);
export default Header;