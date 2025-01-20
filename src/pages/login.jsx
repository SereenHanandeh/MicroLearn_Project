import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(""); // حقل البريد الإلكتروني
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // جلب بيانات المستخدم المخزنة في localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // التحقق من صحة بيانات المستخدم
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setError(""); // مسح أي خطأ
      alert("Logged in successfully!");
      navigate("/home"); // التوجيه إلى الصفحة الرئيسية بعد تسجيل الدخول الناجح
    } else {
      setError("Invalid email or password");
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
