// frontend/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5007/api/auth/login', { email, password });
      console.log(response.data);
      // Store token and user ID (or any other identifier)
      localStorage.setItem('token', response.data.token);
      const userId = response.data.userId; // Assuming user ID is returned from the backend

      // Navigate to the user's ProjectList page (pass userId as part of the route)
      navigate(`/project-list/${userId}`);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Error logging in user');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
