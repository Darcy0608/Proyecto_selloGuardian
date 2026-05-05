//import React from 'react';
import './Registro.css';

const Registro = () => (
  <div className="registro-page">
    <div className="registro-card">
      <h1>Registro de Usuario</h1>
      <form className="registro-form">
        <div className="f-row">
          <input type="text" placeholder="Nombre" required />
          <input type="text" placeholder="Apellido" required />
        </div>
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit" className="btn-registro">Crear Cuenta</button>
      </form>
    </div>
  </div>
);
export default Registro;