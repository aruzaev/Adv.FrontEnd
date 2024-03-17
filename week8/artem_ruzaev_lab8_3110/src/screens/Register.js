// Register.js

import React from "react";
import { useNavigate } from "react-router-dom";

let Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success/register"); // Redirecting to a success page for registration
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
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

export default Register;
