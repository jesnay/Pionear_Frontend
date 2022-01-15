import React from "react";
import "./StationBeforeQuest.css";
//import axios from "axios";
import Image1 from "./image_1.png";

function App() {
  let [artifact, setArtifact] = React.useState(null);
  console.log(artifact);
  let artifactID = 1;
  let answer = {
    userID: 20,
    text: ["Hier Antwort 1", "Hier Antwort 2", "Hier Antwort 3"],
    artifactID: 5,
  };
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
      <div className="App-header">
        {/* width at 100%*/}
        <h1>{!artifact ? "Loading..." : artifact.name}</h1>
        <p className="adress">{!artifact ? "Loading..." : artifact.adress}</p>
      </div>
      <div className="images">
        <img src={Image1} alt="Image" />
      </div>
      <div className="ArtifactInfo">
        <p>
          <strong>Thema:</strong> Erinnerungspraktiken
        </p>
        <p>
          <strong>Standort:</strong> Universitätskapelle
        </p>
        <p>
          <strong>Dauer:</strong> 5 Minuten
        </p>
        <p>
          <strong>Autor:</strong> Max Mustermann{" "}
        </p>
      </div>
      <hr className="Line1"></hr>
      <div className="historicalText">
        <p>
          Wir stehen vor einer Grabinschrift, die an Olympia Fulvia Morata
          erinnert. Die italienische Dichterin und Humanistin wurde 1526 in
          Ferrara geboren. Ihr Vater war Lehrer der Söhne von Herzog Alfonso I.
        </p>
      </div>
      <hr className="Line2"></hr>
      <button onClick={test} className="btn btn-primary btn-sm">
        START
      </button>
    </div>
  );
}

export default App;
