import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Test from "./pages/Test/Test.jsx";
import Map from "./pages/Map/Map.jsx";
import Input from "./pages/Input/Input.jsx";
import Blurb from "./components/Blurb/Blurb.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Map />}></Route>
        <Route path="/map" exact element={<Map />}></Route>
        <Route path="/blurb" exact element={<Blurb />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
