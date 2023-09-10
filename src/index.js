import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import "tachyons";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root")); //reactdom is the dom pf our page
root.render(
  //put app in the root div
  <React.StrictMode>
    <div>
      <App/>
    </div>
  </React.StrictMode> //app is app.js(so whatever inside <React.StrictMode> will be rendere in root)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
