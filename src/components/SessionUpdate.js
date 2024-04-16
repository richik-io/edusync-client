import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles.css'; // Import CSS file for styling
import Navbar from './Navbar';
function SessionUpdate() {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/sessions');
      setSessions(response.data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  const handleStatusChange = async (sessionId, newStatus) => {
    try {
      await axios.put(`http://localhost:3000/api/sessions/${sessionId}`, { status: newStatus });
      // Update session status in state directly without refetching data
      const updatedSessions = sessions.map(session => {
        if (session.session_id === sessionId) {
          return { ...session, status: newStatus };
        }
        return session;
      });
      setSessions(updatedSessions);
    } catch (error) {
      console.error('Error updating session status:', error);
    }
  };

  useEffect(() => {
    // Subscribe to changes in session status and refetch sessions when status changes
    const intervalId = setInterval(fetchSessions, 5000); // Refetch sessions every 5 seconds (adjust as needed)
    return () => clearInterval(intervalId); // Cleanup function to clear interval on component unmount
  }, []); // Run effect only once on component mount

  return (
    <div>
      <Navbar/>
    <div className="session-update-container">
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
            <th>Action</th>
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
              <td>
                <button
                  className={`status-button ${session.status === 'accept' ? 'accept' : 'reject'}`}
                  onClick={() => handleStatusChange(session.session_id, session.status === 'accept' ? 'reject' : 'accept')}
                  disabled={session.status === 'accept'}
                >
                  Accept
                </button>
                <button
                  className={`status-button ${session.status === 'reject' ? 'accept' : 'reject'}`}
                  onClick={() => handleStatusChange(session.session_id, session.status === 'reject' ? 'accept' : 'reject')}
                  disabled={session.status === 'reject'}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="submit-button-container">
        <Link to="/session/view"><button className="submit-button">Submit</button></Link>
      </div>
    </div>
    </div>  );
}

export default SessionUpdate;
