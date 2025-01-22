import React, { useState } from "react";
import "../assets/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // حقل البريد الإلكتروني
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // تخزين بيانات المستخدم في localStorage
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration successful!");
    // توجيه المستخدم إلى صفحة تسجيل الدخول بعد التسجيل الناجح
    window.location.href = "/login";
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
        {error && <p id="error-message">{error}</p>}
        <button id="register-button" type="submit">Register</button>
      </form>
      <p id="login-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
