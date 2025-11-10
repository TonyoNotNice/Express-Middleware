import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; // Change to /api/users if needed

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData); // Fixed syntax
};

export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData); // Fixed syntax
  if (res.data.token) {
    localStorage.setItem("token", res.data.token);
  }
  return res.data;
};
