import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = ({
  toggleDarkMode,
  darkMode,
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Microlearning App
        </Link>
        <div className="navbar-links">
          {/* عرض روابط معينة بناءً على حالة تسجيل الدخول */}
          {!isLoggedIn ? (
            <>
              <Link to="/" className="navbar-link">
                Home
              </Link>
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
          {/* رابط لتبديل الوضع الداكن */}
          <Link to="#" onClick={toggleDarkMode} className="dark-mode-link">
            {darkMode ? "🌙" : "🌞"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
