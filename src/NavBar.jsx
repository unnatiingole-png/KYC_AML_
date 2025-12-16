
import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        KYC&AML
      </a>

      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/products" className="navbar-link">Products</a>
        </li>
        <li className="navbar-item">
          <a href="/blog" className="navbar-link">Blog</a>
        </li>
        <li className="navbar-item">
          <a href="/account" className="navbar-link">Account</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;