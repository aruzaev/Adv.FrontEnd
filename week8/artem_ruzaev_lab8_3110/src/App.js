// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Success from "./screens/Success";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success/:action" element={<Success />} />
          <Route path="/success/:action/:price" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
