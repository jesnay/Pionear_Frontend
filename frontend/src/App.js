import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Test from "./pages/Test/Test.jsx";
import Map from "./pages/Map/Map.jsx";
import Input from "./pages/Input/Input.jsx";
import Blurb from "./components/Blurb/Blurb.jsx";
import {
  QuestTakeImage,
  QuestPreviewImage,
  QuestUserInput,
} from "./pages/Quest/Quest.jsx";
import QuestAnswers from "./pages/QuestAnswers/QuestAnswers.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Input />}></Route>
        <Route path="/map" exact element={<Map />}></Route>
        <Route path="/blurb" exact element={<Blurb />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
