import logo from "./logo.svg";
import React from "react";
import "./App.css";

function App() {
  const [artifact, setArtifact] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/getArtifactData")
      .then((res) => res.json())
      .then((artifact) => setArtifact(artifact.name));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!artifact ? "Loading..." : artifact}</p>
      </header>
    </div>
  );
}

export default App;
