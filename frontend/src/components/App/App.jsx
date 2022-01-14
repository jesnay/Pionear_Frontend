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
      <div className="container-md">
        <header className="App-header">
          <nav className="navbar">
            <div className="container-fluid">
              {" "}
              {/* width at 100%*/}
              <span className="navbar h1">
                Doofenschmirtz Evil Incorporated
              </span>
            </div>
          </nav>
          <p>{!artifact ? "Loading..." : artifact.name}</p>
          <button onClick={test} className="btn btn-primary">
            I´m a button!
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
