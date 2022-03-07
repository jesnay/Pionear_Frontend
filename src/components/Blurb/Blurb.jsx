import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blurb.module.css";
import Buttons from "../../components/Buttons/Buttons.jsx";
//import { GetStation } from "../../ConnectionToDatabase.js";
import ImgStation from "../../assets/images/Stations/4_Affordanz/Rechteck 609.png";
import ImgWalk from "../../assets/images/Icons/walking.png";
import locationImg from "../../assets/images/Icons/location-active.png";
import timePlaceholder from "../../assets/images/Icons/time.png";

//*component: Shows Information about Station -> Gets Data out of database as an example
function Blurb(props) {
  //let stationID = 4;
  //let station = GetStation(stationID);

  //closes Blurb
  const closeBlurb = () => {
    props.func();
  };

  return (
    <div className={styles.Blurb}>
      <div className="card">
        {/*Information about Station */}
        <div className="Close">
          <Buttons type="close" func={closeBlurb} />
        </div>
        <h1>Affordanz</h1>
        <img src={timePlaceholder} className="timePlaceholder" alt="..." />
        <p className="spot">Unibibliothek: Handschriften</p>
        <img className="stationImage" src={ImgStation} alt="..." />
        <div className="WalkingTime-Container">
          <img className="WalkingImg" src={ImgWalk} alt="" />
          <p className="WalkingText">0 min</p>
        </div>
        <div>
          <p className="historicalText">
            Schriftstücke können mehr als nur gelesen werden. In diesem Kapitel
            beschäftigen wir uns mit dem Begriff der Affordanz und inwiefern
            auch Schriftstücke uns eine Affordanz bieten können.
          </p>
        </div>
        {/*Start Quest*/}
        <div className="ButtonDecoration">
          <Link to="/questa" style={{ textDecoration: "none" }}>
            <Buttons type="basic" text="Station beginnen" />
          </Link>
        </div>

        <div className="alignIconAndAdress">
          <img src={locationImg} className="locationImg" alt="..." />
          <p className="adress">in deiner näheren Umgebung</p>
        </div>
      </div>
    </div>
  );
}

export default Blurb;
