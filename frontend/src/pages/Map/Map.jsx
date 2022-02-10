import React from "react"; //imr shortcut
import "./Map.module.css";
import MapImage from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";

function Map() {
  //ffc shortcut
  return (
    <div className="Map">
      <div className="MapImage">
        <img src={MapImage} alt="MapImage" />
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="location-container">
        <img className="inactive" src={locationInactive} alt="" />
        <img className="active" src={locationActive} alt="" />
      </div>
    </div>
  );
}

export default Map;
