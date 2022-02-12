import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import {
//   QuestNoImage,
//   QuestImage,
//   QuestTextField,
// } from "./pages/StationQuest/StationQuest.jsx";
// import StationInfo from "./pages/StationInfo/StationInfo.jsx";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Map from "./pages/Map/Map.jsx";
// import StationBeforeQuest from "./pages/StationBeforeQuest/StationBeforeQuest.jsx";
import Test from "./pages/Test/Test.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
