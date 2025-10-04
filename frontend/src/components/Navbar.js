import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">TaskApp</Link>
        <div>
          <Link className="btn btn-primary me-2" to="/dashboard">Dashboard</Link>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
