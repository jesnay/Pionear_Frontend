import React, { Component } from "react"; //imrc shortcut
import mapStyle from "./MapStyle";

function Map() {
  //ffc shortcut
  return (
    <div style={{ width: "100%", height: "550px" }}>
      <Map
        bootstrapURLKeys={{ key: "AIzaSyBgkECoHHIPFaA1Ve7qCnApu7uGmX0MjIs" }}
        defaultZoom={15}
        options={{ styles: mapStyle }}
        defaultCenter={{ lat: 49.40989504148873, lng: 8.705914587125145 }}
      />
    </div>
  );
}

export default Map;
