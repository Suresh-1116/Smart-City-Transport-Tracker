import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://smart-city-transport-tracker.onrender.com/api/auth/login',
        { email, password }
      );
      localStorage.setItem('token', response.data);
      setIsError(false);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/routes'), 1500);
    } catch (error) {
      setIsError(true);
      setMessage('Invalid email or password!');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '400px', margin: '60px auto' }}>
        <h2 style={{ marginBottom: '20px', color: '#1a73e8' }}>Login</h2>
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleLogin}
          style={{ width: '100%', marginTop: '15px' }}
        >
          Login
        </button>
        {message && (
          <p className={isError ? 'error' : 'success'}>{message}</p>
        )}
        <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
          Don't have an account?{' '}
          <a href="/register" style={{ color: '#1a73e8' }}>Register here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;