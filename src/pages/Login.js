// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement your login logic here
    // For demonstration, let's assume different credentials for different roles
    if (username === 'admin' && password === 'adminpassword') {
      // Fetch user data for admin
      fetchUserData('admin');
    } else if (username === 'volunteer' && password === 'volunteerpassword') {
      // Fetch user data for volunteer
      fetchUserData('volunteer');
    } else if (username === 'teamlead' && password === 'teamleadpassword') {
      // Fetch user data for team lead
      fetchUserData('teamlead');
    } else {
      alert('Invalid credentials');
    }
  };

  const fetchUserData = (role) => {
    const apiUrl = role === 'admin'
      ? 'http://localhost:3000/api/users/1'
      : 'http://localhost:3000/api/users/2';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Store user data in localStorage or state
        // For simplicity, let's just log the data
        console.log('User data:', data);
        // Redirect to the Home page after successful login
        navigate('/home');
      })
      .catch(error => console.error('Error fetching user data:', error));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
