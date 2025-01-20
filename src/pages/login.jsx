import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../context/AlertContext.jsx"; // استيراد الـ hook
import "../assets/login.css";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showAlert } = useAlert(); // استخدام الـ hook لعرض الـ alert

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      showAlert("Logged in successfully!", "success"); // عرض الـ alert عند النجاح
      handleLogin();
      navigate("/home");
    } else {
      showAlert("Invalid email or password", "error"); // عرض الـ alert عند الخطأ
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
