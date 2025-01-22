import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/homePage.css";

const HomePage = () => {
  const navigate = useNavigate(); // استخدام useNavigate
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // التحقق من وجود المستخدم في localStorage عند تحميل الصفحة
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsLoggedIn(true); // إذا كان المستخدم مسجلاً دخوله
    }
  }, []);

  // دالة لتوجيه المستخدم إلى صفحة التسجيل
  const handleSignUp = () => {
    navigate("/register");
  };

  // دالة لتوجيه المستخدم إلى صفحة تسجيل الدخول
  const handleLogin = () => {
    navigate("/login");
  };

  // دالة لتوجيه المستخدم إلى الصفحة الرئيسية
  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div id="home-page">
      <div id="intro-section">
        <h1>Welcome to the Motion App</h1>
        <p>
          This platform allows you to learn new skills through short, engaging,
          and interactive videos. Whether you're looking to improve your
          leadership skills, productivity, or tech knowledge, we've got you
          covered!
        </p>
        <p>
          {isLoggedIn
            ? "You're logged in! Start exploring and watching videos today."
            : "Sign up or log in to get started and start watching videos today!"}
        </p>
        <div id="buttons-section">
          {!isLoggedIn ? (
            <>
              <button id="btn-primary" onClick={handleSignUp}>
                Sign Up
              </button>
              <button id="btn-secondary" onClick={handleLogin}>
                Log In
              </button>
            </>
          ) : (
            <button id="btn-primary" onClick={handleGoHome}>
              Go to Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
