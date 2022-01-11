const express = require("express");
const Artifact = require("./classes/artifact.js");
const User = require("./classes/user.js");

let app = express();
const port = 3001;

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

app.get("/api/getArtifactData", async function (req, res) {
  const name = await Artifact.getName(1);
  const latitude = await Artifact.getLatitude(1);
  const longitude = await Artifact.getLongitude(1);
  res.json({
    name: name,
    latitude: latitude,
    longitude: longitude,
  });
});

app.get("/api/getUserData", async function (req, res) {
  const name = await User.getName(18);
  //console.log(name);
  res.json({ name: name });
});

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
