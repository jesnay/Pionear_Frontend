const express = require("express");
const Artifact = require("./classes/artifact.js");
const User = require("./classes/user.js");
const Answer = require("./classes/answer.js");

let app = express();
const port = 3001;

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

app.get("/api/artifact/:id", async function (req, res) {
  const artifactID = req.params.id;
  const artifact = await Artifact.getAll(artifactID);
  res.json({
    name: artifact.name,
    latitude: artifact.latitude,
    longitude: artifact.longitude,
  });
  //console.log(artifact.name);
});

app.get("/api/user/:id", async function (req, res) {
  const userID = req.params.id;
  const user = await User.getAll(userID);
  res.json({ name: user.name, email: user.email, level: user.level });
  //console.log(user.name);
});

/*app.get("/api/answer", async function (req, res) {
  await Answer.save(19, "Das ist meine Antwort", 4);
  console.log("Hello");
});*/

/*app.post("/api/answer/:userID:answer:artifactID", async function (req, res) {
  const userID = req.params.userID;
  const answer = req.params.answer;
  const artifactID = req.params.artifactID;
  await Answer.save(userID, answer, artifactID);
  console.log(answer);
});*/

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
