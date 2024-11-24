import React from 'react';
import '../Styles/Navbar.css'; // Ensure you include the appropriate CSS file

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" id="menu-toggle" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Parking Space</a></li>
            <li><a href="#category">Booking</a></li>
            <li><a href="#menu">Wallet</a></li>
            <li><a href="#testimonial">Profile</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <h1 className="logo">Parking Management   </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;