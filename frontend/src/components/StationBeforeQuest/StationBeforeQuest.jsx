import React from "react";
import "./StationBeforeQuest.css";
//import axios from "axios";
import Image1 from "./image_1.png";

function App() {
  let [station, setStation] = React.useState(null);
  console.log(station);
  let stationID = 4;
  let answer = {
    userID: 20,
    text: ["Eins", "Zwei", "Drei"],
    stationID: 5,
  };

  function saveToDatabase() {
    console.log("Hello World");
    fetch(`/api/answer`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    });
  }

  function test() {
    console.log("Hello World");
  }

  React.useEffect(() => {
    fetch(`/api/station/${stationID}`)
      .then((res) => res.json())
      .then((station) => setStation(station));
    console.log("getstationdata");
  }, []);

  //*mit React.useEffect
  /*React.useEffect(() => {
    fetch(`/api/answer`, {
      method: `POST`,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    }).then(() => {
      console.log("Answer added");
    });
  }, []);*/

  return (
    <div className="App">
      <div className="App-header">
        {/* width at 100%*/}
        {/* //? Hier ist noch was faul */}
        <h1>{!station ? "Loading..." : station.spot}</h1>
        <p className="adress">{!station ? "Loading..." : station.adress}</p>
      </div>
      <div className="images">
        <img src={Image1} alt="Image" />
      </div>
      <div className="stationInfo">
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
