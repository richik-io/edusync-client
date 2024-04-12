// NavigationButtons.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationButtons = () => {
  return (
    <div>
      <Link to="/session">
        <button>Session Booking</button>
      </Link>
      <Link to="/attendance">
        <button>Attendance</button>
      </Link>
      <Link to="/logout">
        <button>Logout</button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
