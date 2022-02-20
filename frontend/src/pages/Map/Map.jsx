import React from "react";
import styles from "./Map.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard.jsx";

import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";

function Map() {
  return (
    <div className={styles.Map}>
      <img className={styles.MapImage} src={MapImage} alt="MapImage" />

      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.PreviewCard}>
        <PreviewCard />
      </div>
      {/* <div className="location-container">
        <img className="inactive" src={locationInactive} alt="" />
        <img className="active" src={locationActive} alt="" />
      </div> */}
    </div>
  );
}

export default Map;
