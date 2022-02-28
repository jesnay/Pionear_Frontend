import React from "react";
import styles from "./Map.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard.jsx";
import Blurb from "../../components/Blurb/Blurb.jsx";
import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";

function Map() {
  const [state, setState] = React.useState(false);

  const openBlurb = () => {
    setState(true);
  };
  const closeBlurb = () => {
    setState(false);
  };
  return (
    <div className={styles.Map}>
      <div>
        <img className="MapImage" src={MapImage} alt="MapImage" />
        <div className="locationContainer">
          <img className="inactive1" src={locationInactive} alt="" />
          <img className="inactive2" src={locationInactive} alt="" />
          <img className="active" src={locationActive} alt="" />
        </div>
        {/*<div className="circleContainer">
            <div className="circle"></div>
  </div>*/}
      </div>

      {!state ? (
        <div className="PreviewCard">
          <PreviewCard func={openBlurb} />
        </div>
      ) : null}
      {state ? (
        <div className="Blurb">
          <Blurb func={closeBlurb} />
        </div>
      ) : null}
    </div>
  );
}

export default Map;
