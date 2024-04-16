// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Session from './pages/Session';
import SessionView from './components/SessionView';
import SessionCreate from './components/SessionCreate';
import SessionUpdate from './components/SessionUpdate';
import Attendance from './pages/Attendance';
import AttendanceTable from './components/AttendanceTable';
import AttendanceForm from './components/AttendanceForm';
import AttendanceUpdate from './components/AttendanceUpdate';
import AttendanceView from './components/AttendanceView';


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
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path='/attendance/view' element={<AttendanceTable/>}/>
        <Route path='/attendance/create' element={<AttendanceForm/>}/>
        <Route path='/attendance/update' element={<AttendanceUpdate/>}/>
        {/* <Route path='/attendance/view/you' element={<AttendanceView/>}/> */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
