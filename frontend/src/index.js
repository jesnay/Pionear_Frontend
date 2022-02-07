import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< Updated upstream
import {
  QuestNoImage,
  QuestImage,
  QuestTextField,
} from "./pages/StationQuest/StationQuest.jsx";
import StationInfo from "./pages/StationInfo/StationInfo.jsx";
=======
// import {
//   QuestNoImage,
//   QuestImage,
//   QuestTextField,
// } from "./pages/StationQuest/StationQuest.jsx";
// import StationInfo from "./pages/StationInfo/StationInfo.jsx";
// import StationBeforeQuest from "./pages/StationBeforeQuest/StationBeforeQuest.jsx"
>>>>>>> Stashed changes
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import StationMap from "./pages/StationMap/StationMap.jsx";
import StationBeforeQuest from "./pages/StationBeforeQuest/StationBeforeQuest.jsx";

ReactDOM.render(
  <React.StrictMode>
    <StationMap />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
