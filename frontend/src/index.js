import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {
//   QuestNoImage,
//   QuestImage,
//   QuestTextField,
// } from "./pages/StationQuest/StationQuest.jsx";
import StationInfo from "./pages/StationInfo/StationInfo.jsx";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
// import StationBeforeQuest_V2 from "./pages/StationBeforeQuest_V2/StationBeforeQuest_V2";

ReactDOM.render(
  <React.StrictMode>
    <StationInfo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
