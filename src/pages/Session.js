import React from 'react';
import { Link } from 'react-router-dom';

function Session() {
  return (
    <div>
      <h1>Welcome to Session Booking System</h1>
      <div>
        {/* Link to navigate to the SessionModule component */}
        <Link to="/session/view">View Sessions</Link>
        <Link to="/session/book">Book a Session</Link>
        <Link to="/session/update">Approve Session</Link>
      </div>
    </div>
  );
}

export default Session;
