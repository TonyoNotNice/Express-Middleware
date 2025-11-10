import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";  // Import the Dashboard page
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page: First screen with "MY TODO LIST" & Register button */}
        <Route path="/" element={<HomePage />} />

        {/* Register Page */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </>
  );
};

export default App;
