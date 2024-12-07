import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Stylish Threads - Your one-stop shop for trendy clothes.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@stylishtreads.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook | Instagram | Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Stylish Threads. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

