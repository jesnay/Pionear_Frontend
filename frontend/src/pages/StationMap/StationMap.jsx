//*Folgende Google Map Integration funktioniert nur auf Jennifers Rechner. Die Google Map API funktioniert nur kostenpflichtig auf anderen Rechnern.

import React from "react"; //imrc shortcut
import "./StationMap.css";
import Map from "../../assets/images/Map.png";
// import Map from "google-map-react";
// import p3Style from "./MapStyle";

function StationMap() {
  //ffc shortcut
  return (
    <div className="StationMap">
      <div className="Map">
        <img src={Map} alt="Map" />
      </div>
      <div className="container">
        <div className="circle"></div>
        {/* <div style={{ width: "100%", height: "550px" }}>
        <Map
          bootstrapURLKeys={{ key: "hier Api key einfügen" }}
          defaultZoom={15}
          options={{ styles: p3Style }}
          defaultCenter={{ lat: 49.40989504148873, lng: 8.705914587125145 }}
        />
      </div> */}
      </div>
    </div>
  );
}

export default StationMap;
