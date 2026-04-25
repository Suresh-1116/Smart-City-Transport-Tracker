
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RoutesList from './pages/RoutesList';
import './App.css';

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav>
      <Link to="/" className="brand">🚌 Transport Tracker</Link>
      <Link to="/routes">Routes</Link>
      {isLoggedIn ? (
        <>
          <span style={{ color: 'white', marginLeft: 'auto', marginRight: '15px' }}>
            Welcome, Suresh!
          </span>
          <button
            onClick={handleLogout}
            className="btn"
            style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ marginLeft: 'auto' }}>Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

function Home() {
  return (
    <div className="hero">
      <h1>🚌 Transport Tracker</h1>
      <p>Your smart guide to Hyderabad public transport</p>
      <Link to="/routes">
        <button className="btn btn-primary" style={{ fontSize: '16px', padding: '14px 35px' }}>
          View All Routes
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routes" element={<RoutesList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;