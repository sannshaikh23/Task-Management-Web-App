import React, { useState } from 'react';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(form);
      navigate('/login');
    } catch (err) {
      console.error('Registration error:', err.response?.data || err.message);
      setError('Registration failed. Try again.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Username" name="username" value={form.username} onChange={handleChange} required />
        <input className="form-control mb-2" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <input className="form-control mb-2" placeholder="Password" type="password" name="password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
