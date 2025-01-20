import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode, darkMode, isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Microlearning App
        </Link>
        <div className="navbar-links">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/home" className="navbar-link">
                Home
              </Link>
              <Link to="/search" className="navbar-link">
                Search
              </Link>
              <Link to="/profile" className="navbar-link">
                Profile
              </Link>
              <button onClick={handleLogout} className="navbar-link">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
