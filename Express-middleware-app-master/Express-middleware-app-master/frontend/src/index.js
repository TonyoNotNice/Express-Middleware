import React from "react";
import ReactDOM from "react-dom/client"; // For React 18+
import { BrowserRouter } from "react-router-dom"; // For routing
import App from "./App"; // The main App component
import "./index.css"; // Global styles (pink and green theme)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>  {/* Wrap your app in BrowserRouter to enable routing */}
    <App />
  </BrowserRouter>
);
