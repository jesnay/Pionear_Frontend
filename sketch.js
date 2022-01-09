import Artifact from "./classes/artifact.js";

let id = 3;
let name = await Artifact.getName(id);
let latitude = await Artifact.getLatitude(id);
let longitude = await Artifact.getLongitude(id);

console.log(`Name: ${name}`);
console.log(`Latitude: ${latitude}`);
console.log(`Longitude: ${longitude}`);
