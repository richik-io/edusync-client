// Home.js
import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import Navbar from '../components/Navbar';
import './styles.css';
import NavigationButtons from '../components/NavigationButtons';

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the logged-in user's role
    const loggedInUserRole = localStorage.getItem('userRole');
    const apiUrl = loggedInUserRole === 'admin'
      ? 'http://localhost:3000/api/users/1'
      : 'http://localhost:3000/api/users/2';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
        <Navbar/>
      <h2>Welcome to Home Page</h2>
      {userData && (
        <div class='container'>
        <div className="user-card">
          <img src={userData.user_pic} alt={userData.user_name} />
          <h3>{userData.user_name}</h3>
          <p>Role: {userData.role}</p>
          <TodoList/>
        </div>
        <div class='buttons'>
            <NavigationButtons/>
        </div>
        </div>
      )}
    </div>
  );
};

export default Home;
