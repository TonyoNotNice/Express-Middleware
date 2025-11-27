import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>
      <h2>To-Do App</h2>
      {isLoggedIn ? (
        <>
          <Link to="/home">Home</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="auth-links">
            <p className="login-link" onClick={() => navigate("/login")}>Login</p>
            <p className="register-link" onClick={() => navigate("/register")}>Register</p>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
