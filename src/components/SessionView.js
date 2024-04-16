import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function SessionView() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/sessions')
      .then(response => setSessions(response.data))
      .catch(error => console.error('Error fetching sessions:', error));
  }, []);

  return (
    <div>
      <Navbar/>
      <h2>Sessions</h2>
      <table>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>User ID</th>
            <th>Time</th>
            <th>Date</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(session => (
            <tr key={session.session_id}>
              <td>{session.session_id}</td>
              <td>{session.user_id}</td>
              <td>{session.time}</td>
              <td>{session.date}</td>
              <td>{session.class}</td>
              <td>{session.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SessionView;
