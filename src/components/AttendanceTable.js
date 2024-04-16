import React, { useState, useEffect } from 'react';
import './AttendanceTable.css';

function AttendanceTable() {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3000/api/attendance/');
        const data = await response.json();
        setAttendanceData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Attendance Data</h2>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Sessions Taken</th>
            <th>Total Sessions</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
            <th>User ID</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <tr key={attendance.attendance_id}>
              <td>{attendance.session_id}</td>
              <td>{attendance.sessions_taken}</td>
              <td>{attendance.total_sessions}</td>
              <td>{new Date(attendance.date).toLocaleDateString()}</td>
              <td>{attendance.time}</td>
              <td>{attendance.venue}</td>
              <td>{attendance.user_id}</td>
              <td>{new Date(attendance.createdAt).toLocaleString()}</td>
              <td>{new Date(attendance.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceTable;
