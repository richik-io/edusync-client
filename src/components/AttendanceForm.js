import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttendanceForm.css';

const AttendanceForm = () => {
  const [formData, setFormData] = useState({
    session_id: '',
    sessions_taken: '',
    total_sessions: '',
    date: '',
    time: '',
    venue: '',
    user_id: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/attendance/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Attendance recorded successfully');
        // Reset the form after successful submission
        setFormData({
          session_id: '',
          sessions_taken: '',
          total_sessions: '',
          date: '',
          time: '',
          venue: '',
          user_id: '',
        });
        navigate('/attendance/view');
      } else {
        console.error('Failed to record attendance');
      }
    } catch (error) {
      console.error('Error recording attendance:', error);
    }
  };

  return (
    <div className="attendance-form-container">
      <h2>Record Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Session ID:</label>
          <input
            type="number"
            name="session_id"
            value={formData.session_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sessions Taken:</label>
          <input
            type="number"
            name="sessions_taken"
            value={formData.sessions_taken}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Total Sessions:</label>
          <input
            type="number"
            name="total_sessions"
            value={formData.total_sessions}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>User ID:</label>
          <input
            type="number"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AttendanceForm;
