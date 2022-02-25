import React from "react";
import styles from "./PreviewCard.module.css";
import { GetStation } from "../../ConnectionToDatabase.js";

import StationImg from "../../assets/images/Stations/4_Affordanz/Rechteck 609 klein.png";
import locationImg from "../../assets/images/Icons/location-inactive.png";

function PreviewCard() {
  let stationID = 4;
  let station = GetStation(stationID);

  return (
    <div className={styles.PreviewCard}>
      <img className="PreviewImg" src={StationImg} alt="" />
      <div className="Text">
        <h1>{!station ? "Loading..." : station.topic}</h1>
        <p className="Question">Wie können Schriften eine Affordanz bieten?</p>
        <div className="alignIconAndAdress">
          <img className="locationImg" src={locationImg} alt="..." />
          <p className="stationAdress">
            {!station ? "Loading..." : station.adress}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;
