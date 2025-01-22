import React, { useState } from "react";
import "../assets/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // رسالة النجاح

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من مطابقة كلمتي المرور
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess(""); // مسح رسالة النجاح
      return;
    }

    // التحقق من صحة البريد الإلكتروني
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess(""); // مسح رسالة النجاح
      return;
    }

    // التحقق من قوة كلمة المرور
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setSuccess(""); // مسح رسالة النجاح
      return;
    }

    // تخزين بيانات المستخدم الجديد في localStorage تحت المفتاح "user"
    const newUser = { username, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    setError(""); // مسح رسالة الخطأ
    setSuccess("Registration successful! Redirecting to login...");

    // تأخير التنقل إلى صفحة تسجيل الدخول
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div id="register-container">
      <h2 id="register-title">Register</h2>
      <form onSubmit={handleSubmit} id="register-form">
        <div id="username-container">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div id="email-container">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div id="password-container">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div id="confirm-password-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p id="error-message" className="error-message">
            {error}
          </p>
        )}

        {success && (
          <p id="success-message" className="success-message">
            {success}
          </p>
        )}

        <button id="register-button" type="submit">
          Register
        </button>
      </form>

      <p id="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
