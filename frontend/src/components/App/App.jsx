import React from "react";
import "./App.css";
//import axios from "axios";

function App() {
  let [artifact, setArtifact] = React.useState(null);
  console.log(artifact);
  let artifactID = 1;
  let answer = { userID: 19, text: "I think its a dog", artifactID: 2 };
  function test() {
    console.log("Hello World");
  }

  React.useEffect(() => {
    fetch(`/api/artifact/${artifactID}`)
      .then((res) => res.json())
      .then((artifact) => setArtifact(artifact));
  }, [artifactID]);
  console.log("getartifactdata");

  React.useEffect(() => {
    fetch(`/api/answer`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    }).then(() => {
      console.log("Answer added");
    });
  }, []);

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
