import React from "react";
import "./App.css";
//import axios from "axios";

function App() {
  const [artifact, setArtifact] = React.useState(null);
  const [user, setUser] = React.useState(null);
  let userID = 18;
  let artifactID = 4;
  React.useEffect(() => {
    fetch(`/api/artifact/${artifactID}`)
      .then((res) => res.json())
      .then((artifact) => setArtifact(artifact));
  }, []);

  React.useEffect(() => {
    fetch(`/api/user/${userID}`)
      .then((res) => res.json())
      .then((user) => setUser(user.name));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{!artifact.name ? "Loading..." : artifact.name}</p>
        <p>{!artifact.latitude ? "Loading..." : artifact.latitude}</p>
        <p>{!artifact.longitude ? "Loading..." : artifact.longitude}</p>
      </header>
    </div>
  );
}

export default App;
