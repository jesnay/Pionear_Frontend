import React from "react";
import styles from "./PreviewCard.module.css";
import { GetStation } from "../../ConnectionToDatabase.js";
// import { Link } from "react-router-dom";
import Blurb from "../Blurb/Blurb.jsx";

import StationImg from "../../assets/images/Stations/4_Affordanz/Rechteck 609 klein.png";
import locationImg from "../../assets/images/Icons/location-inactive.png";

function PreviewCard() {
  let stationID = 4;
  let station = GetStation(stationID);

  return (
    <div className={styles.PreviewCard}>
      <button className={styles.PreviewButton}>
        {/* <Blurb></Blurb> */}
        {/* <Link path="/blurb"></Link> */}
        <img className={styles.PreviewImg} src={StationImg} alt="" />
        <div className={styles.Text}>
          <h1>{!station ? "Loading..." : station.topic}</h1>
          <p className={styles.Question}>
            Wie können Schriften eine Affordanz bieten?
          </p>

          <div className={styles.alignIconAndAdress}>
            <img src={locationImg} className={styles.locationImg} alt="..." />
            <p className={styles.adress}>
              {!station ? "Loading..." : station.adress}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default PreviewCard;
