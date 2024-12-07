import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

function Header() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Stylish Threads</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li>
            <Link to="/cart" onClick={toggleMenu}>
              Cart ({cartItemsCount})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;





