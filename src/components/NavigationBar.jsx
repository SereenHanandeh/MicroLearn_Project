import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = ({
  toggleDarkMode,
  darkMode,
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-brand">
          Microlearning App
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
          {/* زر تبديل الوضع الداكن */}
          <button onClick={toggleDarkMode} className="dark-mode-button">
            {darkMode ? "🌙" : "🌞"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
