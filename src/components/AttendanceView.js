import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';

const AttendanceTable = () => {
  const { userData } = useUser();
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/attendance/user/${userData.user_id}`);
        if (response.ok) {
          const data = await response.json();
          setAttendanceData(data);
        } else {
          console.error('Failed to fetch attendance data');
        }
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };

    fetchAttendanceData();
  }, [userData.user_id]);

  return (
    <div>
      <h2>Attendance Data for User ID: {userData.user_id}</h2>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Sessions Taken</th>
            <th>Total Sessions</th>
            <th>Date</th>
            <th>Time</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((attendance) => (
            <tr key={attendance.session_id}>
              <td>{attendance.session_id}</td>
              <td>{attendance.sessions_taken}</td>
              <td>{attendance.total_sessions}</td>
              <td>{attendance.date}</td>
              <td>{attendance.time}</td>
              <td>{attendance.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
