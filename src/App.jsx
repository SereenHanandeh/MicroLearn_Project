// src/App.js

import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import NavigationBar from "./components/NavigationBar";
import { AlertProvider } from './context/AlertContext'
import "./index.css";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // تبديل الوضع بين الفاتح والداكن
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode ? "true" : "false");
  };

  // تسجيل الدخول والخروج
  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
    setDarkMode(storedDarkMode);
    setIsLoggedIn(storedLoginState);
  }, []);

  return (
    <AlertProvider>
      <Router>
        <div className={darkMode ? "app dark-mode" : "app"}>
          <NavigationBar
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
            handleLogout={handleLogout}
            isLoggedIn={isLoggedIn}
          />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />

            <Route
              path="/home"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/search"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AlertProvider>
  );
};

export default App;
