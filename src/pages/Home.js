import React, { useState, useEffect } from 'react';
import TodoList from '../components/TodoList';
import Navbar from '../components/Navbar';
import './styles.css';
import NavigationButtons from '../components/NavigationButtons';
import { useUser } from '../UserContext';

const Home = () => {
  const { userData } = useUser();
  const [fetchedUserData, setFetchedUserData] = useState(null);

  useEffect(() => {
    // Fetch user data based on the logged-in user's role
    if (userData) {
      const apiUrl = `http://localhost:3000/api/users/${userData.user_id}`;
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => setFetchedUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userData]);

  return (
    <div>
      <Navbar />
      <h2>Welcome to Home Page</h2>
      {fetchedUserData && (
        <div className='container'>
          <div className="user-card">
            <img src={fetchedUserData.user_pic} alt={fetchedUserData.user_name} />
            <h3>{fetchedUserData.user_name}</h3>
            <p>Role: {fetchedUserData.role}</p>
            <TodoList />
          </div>
          <div className='buttons'>
            <NavigationButtons />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
