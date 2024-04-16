import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateAttendanceForm = () => {
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
      const response = await fetch(`http://localhost:3000/api/attendance/${formData.session_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Attendance updated successfully');
        navigate('/attendance/view')
      } else {
        console.error('Failed to update attendance');
      }
    } catch (error) {
      console.error('Error updating attendance:', error);
    }
  };

  return (
    <div>
      <h2>Update Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Session ID:</label>
          <input
            type="number"
            name="session_id"
            value={formData.session_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sessions Taken:</label>
          <input
            type="number"
            name="sessions_taken"
            value={formData.sessions_taken}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Total Sessions:</label>
          <input
            type="number"
            name="total_sessions"
            value={formData.total_sessions}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Venue:</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>User ID:</label>
          <input
            type="number"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Attendance</button>
      </form>
    </div>
  );
};

export default UpdateAttendanceForm;
