import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import CSS file for styling
import Navbar from './Navbar';

function SessionCreate() {
  const [formData, setFormData] = useState({
    user_id: '',
    time: '',
    date: '',
    class: '',
    session_topic: '',
    session_type: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        status: 'pending',
      };
      const response = await axios.post('http://localhost:3000/api/sessions', dataToSend);
      console.log('Session created successfully:', response.data);
      // Show alert
      alert('Session created successfully');
      // Redirect to session page
      window.location.href = '/session';
    } catch (error) {
      console.error('Error creating session:', error);
      // Optionally, show an error message
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="moving-shapes"></div> 
    <div className="session-create-container">
      <form onSubmit={handleSubmit}>
      <h2>Create Session</h2>
        <label>User ID:</label>
        <input type="number" name="user_id" value={formData.user_id} onChange={handleChange} required />
        <label>Time:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <label>Class:</label>
        <select name="class" value={formData.class} onChange={handleChange} required>
          <option value="">Select Class</option>
          <option value="1DS">1DS</option>
          <option value="3CMS">3CMS</option>
          <option value="2BBA-A">2BBA-A</option>
          <option value="1PP">1PP</option>
          <option value="3CEP">3CEP</option>
        </select>
        <label>Session Topic:</label>
        <select name="session_topic" value={formData.session_topic} onChange={handleChange} required>
          <option value="">Select Session Topic</option>
          <option value="Academic Skills">Academic Skills</option>
          <option value="Professional Skills">Professional Skills</option>
          <option value="Writing Skills">Writing Skills</option>
          <option value="Managerial and Soft Skills">Managerial and Soft Skills</option>
          <option value="Value Addition Modules">Value Addition Modules</option>
          <option value="Internship and Fellowship">Internship and Fellowship</option>
        </select>
        <label>Session Type:</label>
        <select name="session_type" value={formData.session_type} onChange={handleChange} required>
          <option value="">Select Session Type</option>
          <option value="opt">OPT</option>
          <option value="gpt">GPT</option>
        </select>
        <button type="submit">Create Session</button>
      </form>
    </div>
    </div>
  );
}

export default SessionCreate;
