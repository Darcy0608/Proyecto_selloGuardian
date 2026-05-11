import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
        <ul className='nav-list'>
            <li className="nav-item">Inicio</li>
            <li className="nav-item">Adoptar</li>
            <li className="nav-item">Denunciar</li>
        </ul>

        {/* Perfil integrado en el Navbar */}
        <div className="profile-badge-nav">
          <span>Perfil</span>
        <div className="avatar-icon-nav">👤

        </div>
        </div>
    </nav>
  )
}

export default Navbar;