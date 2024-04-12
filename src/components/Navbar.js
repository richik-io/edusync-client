// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for Navbar styles

const Navbar = ({ loggedInUserRole }) => {
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    // Fetch user role based on the logged-in user's role
    const apiUrl = loggedInUserRole === 'admin'
      ? 'http://localhost:3000/api/users/1'
      : 'http://localhost:3000/api/users/2';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setUserRole(data.role))
      .catch(error => console.error('Error fetching user role:', error));
  }, [loggedInUserRole]);

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
