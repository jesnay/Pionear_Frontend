import React from "react";
import MapImg from "../../assets/images/Map.png";
import ImgStation from "../../assets/images/Stations/1_Olympia/image_1.png";
import "./StationBeforeQuest.css";
import { GetStation, SetAnswer } from "../../ConnectionToDatabase";
import arrowDown from "../../assets/images/Icons/arrowDown.png";
import locationImg from "../../assets/images/Icons/location.png";
import timePlaceholder from "../../assets/images/Icons/time.png";

function StationBeforeQuest() {
  let stationID = 4;
  let categoryID = 1;
  let station = GetStation(stationID);
  let answer = {
    userID: 20,
    text: ["Eins", "Zwei", "Drei"],
    stationID: 5,
    categoryID,
  };

  return (
    <div className="StationBeforeQuestV2">
      <img className="Map" src={MapImg} alt="" />

      <div className="card">
        <div className="alignHeaderAndTime">
          <h1>{!station ? "Loading..." : station.spot}</h1>
          <img src={timePlaceholder} className="timePlaceholder" alt="..." />
        </div>
        <p className="category">{!station ? "Loading..." : categoryID}</p>

        <div className="alignIconAndAdress">
          <img src={locationImg} className="locationImg" alt="..." />
          <p className="adress">{!station ? "Loading..." : station.adress}</p>
        </div>

        <img src={ImgStation} className="card-img-top mx-auto p-4" alt="..." />

        <div className="card-body text-center">
          <div className="historicalText">
            <p className="">{!station ? "Loading..." : station.description}</p>
          </div>

          <button
            onClick={() => {
              SetAnswer(answer);
            }}
            className="button"
          >
            Starten
          </button>
        </div>
        <img src={arrowDown} className="arrow" alt="..." />
      </div>
    </div>
  );
}

export default StationBeforeQuest;
