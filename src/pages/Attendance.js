import React from 'react';
import { Link } from 'react-router-dom';

function Attendance() {
  return (
    <div>
      <h1>Welcome to Attendance Management System</h1>
      <div>
        {/* Link to navigate to the ViewAttendance component */}
        <Link to="/attendance/view">View Attendance</Link>
        {/* Link to navigate to the UpdateAttendance component */}
        <Link to="/attendance/view/you">View your Attendance</Link>
        <Link to="/attendance/update">Update Attendance</Link>
        <Link to="/attendance/create">Add Attendance</Link>
      </div>
    </div>
  );
}

export default Attendance;