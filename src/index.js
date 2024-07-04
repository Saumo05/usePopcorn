import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App_copy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={10} defaultRating={3}></StarRating>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    ></StarRating>
    <Test></Test> */}
  </React.StrictMode>
);
