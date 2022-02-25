import React from "react";
import styles from "./Map.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard.jsx";
import Blurb from "../../components/Blurb/Blurb.jsx";

import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";
import CategoryButton from "../../assets/buttons/CategoryButton.png";

function Map() {
  return (
    <div className={styles.Map}>
      <img className="MapImage" src={MapImage} alt="MapImage" />

      <img
        className="CategoryButton"
        src={CategoryButton}
        alt="CategoryButton"
      />

      <div className="locationContainer">
        <img className="inactive1" src={locationInactive} alt="" />
        <img className="inactive2" src={locationInactive} alt="" />
        <img className="active" src={locationActive} alt="" />
      </div>

      <div className="circleContainer">
        <div className="circle"></div>
      </div>

      <div className="Blurb">
        <Blurb />
      </div>

      {/* <div className="PreviewCard">
        <PreviewCard />
      </div> */}
    </div>
  );
}

export default Map;
