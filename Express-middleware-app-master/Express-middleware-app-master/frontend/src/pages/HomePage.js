import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to My To-Do List!</h1>
      <p>Organize your tasks efficiently and stay on top of your goals.</p>
      
      <h2>Let's Get Started!</h2>
      <p>To begin using the app, please register an account.</p>

      <button onClick={() => navigate("/register")}>Register Now</button>

      <p>
        Already have an account?
        <span className="login-link" onClick={() => navigate("/login")}>Log in here</span>
      </p>
    </div>
  );
};

export default HomePage;
