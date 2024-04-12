// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Session from './pages/Session';
import SessionView from './components/SessionView';
import SessionCreate from './components/SessionCreate';
import SessionUpdate from './components/SessionUpdate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/session" element={<Session />}/>
        <Route path="/session/view" element={<SessionView />}/>
        <Route path="/session/book" element={<SessionCreate />}/>
        <Route path="/session/update" element={<SessionUpdate />}/>
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
