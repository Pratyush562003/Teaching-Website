import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onAwardsClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <div className="logo-container">
            <h1 className="logo-text">HELLO SIR</h1>
            <i className="fas fa-flask logo-icon"></i>
          </div>
          <p className="subtitle">Chemistry Teacher</p>
        </div>
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={handleMenuToggle} aria-label="Toggle menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-menu${menuOpen ? ' active' : ''}`}>
          <li className="nav-item">
            <a href="mailto:dbbrtmt@gmail.com" className="nav-link">
              <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
              dbbrtmt@gmail.com
            </a>
          </li>
          <li className="nav-item">
            <a href="https://wa.me/919681071873" className="nav-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" style={{ color: '#25D366', marginRight: '8px' }}></i>
              (+91) 9681071873
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.youtube.com/@hellosir-Chemistry_teacher" className="nav-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" style={{ color: '#FF0000', marginRight: '8px' }}></i>
              My YouTube Channel
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 