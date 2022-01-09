const express = require("express");
const Artifact = require("./classes/artifact.js");

let app = express();
const port = 3001;

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

app.get("/api/getArtifactName", async function (req, res) {
  const response = await Artifact.getName(1);
  res.json({ message: response });
});

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
