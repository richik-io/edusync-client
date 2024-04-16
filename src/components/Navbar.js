// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for Navbar styles
import { useUser } from '../UserContext';

const Navbar = ({ loggedInUserRole }) => {
  const { userData } = useUser();
  const userRole = userData.role;
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div className="navbar-role">
          <span>{userRole}</span>
        </div>
      </div>
      <div className="navbar-links">
        <Link to="/session">Session Booking</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/attendance">Attendance</Link>
      </div>
    </nav>
  );
};

export default Navbar;
