//*Folgende Google Map Integration funktioniert nur auf Jennifers Rechner. Die Google Map API funktioniert nur kostenpflichtig auf anderen Rechnern.

import React from "react"; //imrc shortcut
import Map from "google-map-react";
import p3Style from "./MapStyle";

function StationMap() {
  //ffc shortcut
  return (
    <div>
      <div style={{ width: "100%", height: "550px" }}>
        <Map
          bootstrapURLKeys={{ key: "AIzaSyBgkECoHHIPFaA1Ve7qCnApu7uGmX0MjIs" }}
          defaultZoom={15}
          options={{ styles: p3Style }}
          defaultCenter={{ lat: 49.40989504148873, lng: 8.705914587125145 }}
        />
      </div>
      <div>
        <button>Hello I am a button</button>
      </div>
    </div>
  );
}

export default StationMap;
