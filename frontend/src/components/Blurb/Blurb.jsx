import React from "react";
import { GetStation, SetAnswer } from "../../ConnectionToDatabase.js";
import styles from "./Blurb.module.css";

import MapImg from "../../assets/images/Map.png";
import ImgStation from "../../assets/images/Stations/4_Affordanz/Rechteck 609.png";
import ImgWalk from "../../assets/images/Icons/walking.png";
import locationImg from "../../assets/images/Icons/location-active.png";
import timePlaceholder from "../../assets/images/Icons/time.png";
import Buttons from "../../components/Buttons/Buttons.jsx";

function Blurb() {
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
    <div className={styles.Blurb}>
      <div className="card">
       {/* Hier gebauten Button einbauen */}
       <div className="Close">
        <Buttons type= "close"/>
      </div>
        {/* <img className="closeButton" src={CloseButton} alt="close" />  */}
        <h1>{!station ? "Loading..." : station.topic}</h1>
        <img src={timePlaceholder} className="timePlaceholder" alt="..." />
        <p className="spot">{!station ? "Loading..." : station.spot}</p>
        <img className="stationImage" src={ImgStation} alt="..." />
        <div className="WalkingTime-Container">
          <img className="WalkingImg" src={ImgWalk} alt="" />
          <p className="WalkingText">0 min</p>
        </div>
        <div>
          <p className="historicalText">
            {!station ? "Loading..." : station.description}
          </p>
        </div>
        <button
          onClick={() => {
            SetAnswer(answer);
          }}
          className="button"
        >
          Station beginnen
        </button>
        <div className="alignIconAndAdress">
          <img src={locationImg} className="locationImg" alt="..." />
          <p className="adress">in deiner näheren Umgebung</p>
        </div>
      </div>
    </div>
  );
}

export default Blurb;
