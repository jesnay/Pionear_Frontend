import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test/Test.jsx";
import Map from "./pages/Map/Map.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Test />}></Route>
        <Route path="/map" exact element={<Map />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
