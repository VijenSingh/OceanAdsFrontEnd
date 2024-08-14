import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import TrackingTable from '../src/components/TrackingTable';
import LoginPage from '../src/components/LoginPage'; 
import Navbar from './components/Navbar';
import ClientDataForm from './components/ClientDataForm';

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return token && isAdmin;
};

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/api/alltrackdata"
          element={isAuthenticated() ? <TrackingTable /> : <Navigate to="/" />}
        />
         <Route path="/api/save-client-data" element={<ClientDataForm />} />
        <Route path="/api/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
