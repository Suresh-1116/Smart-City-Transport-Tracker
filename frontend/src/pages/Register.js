import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        'https://smart-city-transport-tracker.onrender.com/api/auth/register',
        { name, email, password }
      );
      setIsError(false);
      setMessage(response.data);
      setTimeout(() => navigate('/login'), 1500);
    } catch (error) {
      setIsError(true);
      setMessage('Registration failed! Try again.');
    }
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: '400px', margin: '60px auto' }}>
        <h2 style={{ marginBottom: '20px', color: '#1a73e8' }}>Create Account</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
          onClick={handleRegister}
          style={{ width: '100%', marginTop: '15px' }}
        >
          Register
        </button>
        {message && (
          <p className={isError ? 'error' : 'success'}>{message}</p>
        )}
        <p style={{ marginTop: '15px', color: '#666', fontSize: '14px' }}>
          Already have an account?{' '}
          <a href="/login" style={{ color: '#1a73e8' }}>Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;