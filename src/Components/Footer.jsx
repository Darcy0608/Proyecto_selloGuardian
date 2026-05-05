import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>Contacto</h4>
        <p>📍 Calle Principal #14A, Popayán, Colombia</p>
        <p>📞 +57 300 123 4567</p>
      </div>
      <div className="footer-section">
        <h4>Síguenos</h4>
        <div className="social-icons">
           {/* Aquí irían tus iconos */}
           <span>FB</span> <span>IG</span> <span>TW</span> <span>WA</span>
        </div>
      </div>
    </div>
    <p className="copyright">jp &copy; 2026</p>
  </footer>
);

export default Footer;