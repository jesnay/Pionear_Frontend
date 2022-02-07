import React from "react"; //imrc shortcut
import "./StationMap.css";
import Map from "../../assets/images/Map.png";
import locationInactive from "../../assets/images/Icons/location-inactive.png";
import locationActive from "../../assets/images/Icons/location-active.png";
// import SimpleSlider from "../../components/Slide/SimpleSlider";

function StationMap() {
  //ffc shortcut
  return (
    <div className="StationMap">
      <div className="Map">
        <img src={Map} alt="Map" />
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

export default StationMap;

//*Folgende Google Map Integration funktioniert nur auf Jennifers Rechner. Die Google Map API funktioniert nur kostenpflichtig auf anderen Rechnern.

// import Map from "google-map-react";
// import p3Style from "./MapStyle";

//  <div style={{ width: "100%", height: "550px" }}>
//         <Map
//           bootstrapURLKeys={{ key: "hier Api key einfügen" }}
//           defaultZoom={15}
//           options={{ styles: p3Style }}
//           defaultCenter={{ lat: 49.40989504148873, lng: 8.705914587125145 }}
//         />
//       </div>
//Alternative: openstreetmap oder normales Google Maps
