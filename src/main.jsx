import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter has a base of "/" & HashRouter has base of "/#"
// import { HashRouter } from "react-router-dom"; (HashRouter allows website to be uploaded to GitHub Pages)

import App from "./components/App/App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
