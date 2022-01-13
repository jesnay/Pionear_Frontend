import React from "react";
import "./App.css";
//import axios from "axios";

//? Zeile 30 <p> artifactName Warum funktioniert bei reload nicht, aber cut and paste funktioniert wieder
function App() {
  const [artifact, setArtifact] = React.useState(null);
  
let artifactID=1;

React.useEffect(() => {
  fetch(`/api/artifact/${artifactID}`)
    .then((res) => res.json())
    .then((artifact) => setArtifact(artifact));
}, [artifactID]);
  console.log("getartifactdata");

  
  console.log("getuserdata");
  
  return (
    <div className="App">
      <header className="App-header">
      <button onClick={console.log("hello")} className="btn btn-primary">HELLO WORLD</button>
        <p>Hello</p>
        <p>{!artifact.name ? "Loading..." : artifact.name}</p>
      </header>
    </div>
  );
}

export default App;
