import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import Login from "./pages/login";
import Register from "./pages/register";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import NavigationBar from "./components/NavigationBar";
import "./index.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // تبديل الوضع بين الفاتح والداكن
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // محاكاة تسجيل الدخول
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className={darkMode ? "app dark-mode" : "app"}>
        <NavigationBar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          handleLogout={handleLogout}
          isLoggedIn={isLoggedIn}
        />

      

        {/* التنقل بين الصفحات */}
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<HomePage />} />

          {/* تسجيل الدخول و التسجيل */}
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />

          {/* صفحة الفيديوهات، فقط عندما يكون المستخدم مسجلاً دخول */}
          {isLoggedIn && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
