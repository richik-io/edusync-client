import React, { useState } from 'react';
import axios from 'axios';

function SessionCreate() {
  const [formData, setFormData] = useState({
    user_id: '',
    time: '',
    date: '',
    class: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      status: 'pending',
    };
    axios.post('http://localhost:3000/api/sessions', dataToSend)
      .then(response => {
        console.log('Session created successfully:', response.data);
        // Show alert
        alert('Session created successfully');
        // Redirect to home page
        window.location.href = '/session';
      })
      .catch(error => {
        console.error('Error creating session:', error);
        // Optionally, show an error message
      });
  };

  return (
    <div>
      <h2>Create Session</h2>
      <form onSubmit={handleSubmit}>
        <label>User ID:</label>
        <input type="number" name="user_id" value={formData.user_id} onChange={handleChange} required />
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <label>Class:</label>
        <select name="class" value={formData.class} onChange={handleChange} required>
          <option value="">Select Class</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
          <option value="Option 5">Option 5</option>
        </select>
        <button type="submit">Create Session</button>
      </form>
    </div>
  );
}

export default SessionCreate;
