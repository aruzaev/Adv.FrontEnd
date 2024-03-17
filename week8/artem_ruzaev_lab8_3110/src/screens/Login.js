// Login.js

import React from "react";
import { useNavigate } from "react-router-dom";

let Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success/login"); // Redirecting to a success page for login
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
