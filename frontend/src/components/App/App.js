import React from "react";
import "./App.css";
//import axios from "axios";

//? Zeile 30 <p> artifactName Warum funktioniert bei reload nicht, aber cut and paste funktioniert wieder
function App() {
  let [artifact, setArtifact] = React.useState(null);
  console.log(artifact);
  let artifactID = 1;
  function test() {
    console.log("Hello World");
  }
  React.useEffect(() => {
    fetch(`/api/artifact/${artifactID}`)
      .then((res) => res.json())
      .then((artifact) => setArtifact(artifact));
  }, [artifactID]);
  console.log("getartifactdata");

  //? warum werden die sachen zweimal aufgerufen? --> artifactID und der button bzw. eigentlich alles :D

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={test} className="btn btn-primary">
          HELLO WORLD
        </button>
        <p>Hello!</p>
        <p>{!artifact ? "Loading..." : artifact.name}</p>
      </header>
    </div>
  );
}

export default App;
