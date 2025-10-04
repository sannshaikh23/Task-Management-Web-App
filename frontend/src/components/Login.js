import React, { useState } from 'react';
import { loginUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('access_token', res.data.access);
      navigate('/dashboard');
    } catch (err) {
      setError('Login failed. Check credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Username" name="username" value={form.username} onChange={handleChange} required />
        <input className="form-control mb-2" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
