import React from "react";
import "./StationBeforeQuest.css";
//import axios from "axios";
import Image1 from "../../assets/images/Stations/1_Olympia/image_1.png";
import { GetStation, SetAnswer } from "../../ConnectionToDatabase";

function StationBeforeQuest() {
  let stationID = 4;
  let station = GetStation(stationID);
  let answer = {
    userID: 20,
    text: ["Eins", "Zwei", "Drei"],
    stationID: 5,
  };

  return (
    <div className="App">
      <div className="App-header">
        {/* width at 100%*/}
        {/* //? Hier ist noch was faul */}
        <h1>{!station ? "Loading..." : station.spot}</h1>
        <p className="adress">{!station ? "Loading..." : station.adress}</p>
      </div>
      <div className="images">
        <img src={Image1} alt="" />
      </div>
      <div className="stationInfo">
        <p>
          <strong>Adresse:</strong> {!station ? "Loading..." : station.adress}
        </p>

        <p>
          <strong>Dauer:</strong> 5 Minuten
        </p>
        <p>
          <strong>Autor:</strong> {!station ? "Loading..." : station.author}
        </p>
      </div>
      <hr className="Line1"></hr>
      <div className="historicalText">
        <p>{!station ? "Loading..." : station.description}</p>
      </div>
      <hr className="Line2"></hr>
      <button
        onClick={() => {
          SetAnswer(answer);
        }}
        className="btn btn-primary btn-sm"
      >
        START
      </button>
    </div>
  );
}

export default StationBeforeQuest;
