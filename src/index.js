import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./App.css";

import CurrencyConverter from './Components/CurrencyConverter';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CurrencyConverter />
  </React.StrictMode>
);

