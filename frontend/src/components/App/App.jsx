import React from "react";
import "./App.css";
//import axios from "axios";

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

  React.useEffect(() => {
    fetch(`/api/station/${stationID}`)
      .then((res) => res.json())
      .then((station) => setStation(station));
  }, [stationID]);
  console.log("getstationdata");

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
          <p>{!station ? "Loading..." : station.spot}</p>
          <button onClick={saveToDatabase} className="btn btn-primary">
            I´m a button!
          </button>
        </header>
      </div>
    </div>
  );
}

export default App;
