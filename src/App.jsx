import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FormPage from './pages/FormPage';
import SubmissionPage from './pages/SubmissionPage';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink to="/">Form</NavLink>
        <NavLink to="/submissions">Submissions</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/submissions" element={<SubmissionPage />} />
      </Routes>
    </Router>
  );
}

export default App;