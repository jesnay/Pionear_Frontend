import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Map from "./pages/Map/Map.jsx";
import Input from "./pages/Input/Input.jsx";
import {
  QuestTakeImage,
  QuestPreviewImage,
  QuestUserInput,
} from "./pages/Quest/Quest.jsx";
import QuestAnswers from "./pages/QuestAnswers/QuestAnswers.jsx";
import Categroy from "./pages/Category/Category.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Categroy />}></Route>
        <Route path="/map" exact element={<Map />}></Route>
        <Route path="/questa" exact element={<QuestTakeImage />}></Route>
        <Route path="/questb" exact element={<QuestPreviewImage />}></Route>
        <Route path="/questc" exact element={<QuestUserInput />}></Route>
        <Route path="/input" exact element={<Input />}></Route>
        <Route path="/answers" exact element={<QuestAnswers />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
