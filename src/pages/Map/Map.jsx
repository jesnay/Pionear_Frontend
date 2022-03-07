import React from "react";
import styles from "./Map.module.css";
import PreviewCard from "../../components/PreviewCard/PreviewCard.jsx";
import Blurb from "../../components/Blurb/Blurb.jsx";
import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";

//*page: Map showing different Station Locations, your current Location and a short Preview of the Stations
function Map() {
  const [state, setState] = React.useState(false); //true: show Blurb / false: dont show Blurb

  //opens Blurb
  const openBlurb = () => {
    setState(true);
  };

  //closes Blurb
  const closeBlurb = () => {
    setState(false);
  };

  return (
    <div className={styles.Map}>
      <div>
        {/*Display Map -> Here, the Map Component would normally be used, including the Map API. This is left out for cost reasons*/}
        <img
          className={state ? "MapImageBrightness" : "MapImage"}
          src={MapImage}
          alt="MapImage"
        />
        {/*Display location Pins of different Stations on Map*/}
        <div className="locationContainer">
          <img className="inactive1" src={locationInactive} alt="" />
          <img className="inactive2" src={locationInactive} alt="" />
          <img className="active" src={locationActive} alt="" />
        </div>
        {/*Display current Positio on Map*/}
        {/*
          <div className="circleContainer">
            <div className="circle"></div>
          </div>
        */}
      </div>
      {/*Display Preview of Station*/}
      {!state ? (
        <div className="PreviewCard">
          <PreviewCard func={openBlurb} />
        </div>
      ) : null}
      {/*Display Blurb with more Info to Station*/}
      {state ? (
        <div className="Blurb">
          <Blurb func={closeBlurb} />
        </div>
      ) : null}
    </div>
  );
}

export default Map;
