import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleMenu}>
        {menuOpen ? '×' : '☰'} {/* Change button text based on menu state */}
      </button>
      <h1 className="header-title"> Automated Home Gardening System</h1>
      {menuOpen && (
        <div className="side-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/motor">Motor Control</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/account">Account</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
