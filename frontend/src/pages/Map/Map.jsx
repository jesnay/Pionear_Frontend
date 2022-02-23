import React from "react";
import styles from "./Map.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard.jsx";
import Blurb from "../../components/Blurb/Blurb.jsx";

import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";
import CategoryButton from "../../assets/buttons/Category-Button.png"

function Map() {
  return (
    <div className={styles.Map}>
      <img className={styles.MapImage} src={MapImage} alt="MapImage" />

<img className={styles.CategoryButton} src={CategoryButton} alt="CategoryButton"/>

      <div className={styles.locationContainer}>
        <img className={styles.inactive1} src={locationInactive} alt="" />
        <img className={styles.inactive2} src={locationInactive} alt="" />
        <img className={styles.active} src={locationActive} alt="" />
      </div>

      <div className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </div>

<div className={styles.Blurb}>
  <Blurb/>
</div>

      {/* <div className={styles.PreviewCard}>
        <PreviewCard />
      </div> */}
      
    </div>
  );
}

export default Map;
