//import Artifact from "./classes/artifact.js";
const Artifact = require("./classes/artifact.js");

console.log("Hello Mothafucka");
//console.log(`Name: ${name}`);
//console.log(`Longitude: ${longitude}`);
//console.log(`Latitude: ${latitude}`);

async function initMap() {
  //let name = await Artifact.getName(1);
  //let longitude = await Artifact.getLongitude(1);
  //let latitude = await Artifact.getLatitude(1);
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 49.40989504148873, lng: 8.705914587125145 },
    zoom: 15,
    mapId: "b9fb0e19740d0b8d",
  });
  //for (let i = 0; i < artifacts.length; i++) {
  //const artifact = artifacts[i];

  const marker = new google.maps.Marker({
    position: { lat: 49.40989504148873, lng: 8.705914587125145 },
    map,
    title: "xxx",
    icon: {
      url: "../assets/icons8-location.png",
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(40, 40),
    },
  });

  const infowindow = new google.maps.InfoWindow({
    content: "xxx",
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
  //}
}
