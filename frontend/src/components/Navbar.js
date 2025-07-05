import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-link">Home</Link>
        {user && (
          <>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/bugs" className="nav-link">Bugs</Link>
            <Link to="/report" className="nav-link">Report Bug</Link>
          </>
        )}
      </div>

      <div className="nav-right">
        {user ? (
          <button className="nav-button" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
