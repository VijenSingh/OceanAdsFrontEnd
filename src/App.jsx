import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../src/components/HomePage';
import TrackingTable from '../src/components/TrackingTable';
import LoginPage from '../src/components/LoginPage'; 
import Navbar from './components/Navbar';
import ClientDataForm from './components/ClientDataForm';

const isAuthenticated = () => {
  return localStorage.getItem('isAdmin') === 'true';
};

const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/track"
          element={isAuthenticated() ? <TrackingTable /> : <Navigate to="/login" />}
        />
         <Route path="/api/save-client-data" element={<ClientDataForm />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
