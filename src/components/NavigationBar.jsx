import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../assets/navBar.css";
import logo from "../assets/logo.png"; 

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="App Logo" className="navbar-logo" />{" "}
        </NavLink>
        <div className="navbar-links">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Register
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Search
              </NavLink>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
              >
                Profile
              </NavLink>
              <button onClick={handleLogout} className="navbar-link">
                Logout
              </button>
            </>
          )}
          <button onClick={toggleDarkMode} className="dark-mode-button">
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
