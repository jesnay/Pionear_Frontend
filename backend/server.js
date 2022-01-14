const express = require("express");
const Artifact = require("./classes/artifact.js");
const User = require("./classes/user.js");
const Answer = require("./classes/answer.js");

let app = express();
const port = 3001;
app.use(express.json());

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

//*Get all Artifact Data per id
app.get("/api/artifact/:id", async function (req, res) {
  const artifactID = req.params.id;
  const artifact = await Artifact.getAll(artifactID);
  res.json({
    name: artifact.name,
    latitude: artifact.latitude,
    longitude: artifact.longitude,
    task: artifact.task,
    description: artifact.description,
    adress: artifact.adress,
    topic: artifact.topic,
    position: artifact.position,
    author: artifact.author,
    historicalText: artifact.historicalText,
    scientificText: artifact.scientificText,
  });
});

//*Get all User Data per id
app.get("/api/user/:id", async function (req, res) {
  const userID = req.params.id;
  const user = await User.getAll(userID);
  res.json({ name: user.name, email: user.email, level: user.level });
  //console.log(user.name);
});

//*Save given Data into Database
app.post("/api/answer", (req, res) => {
  let answer = req.body.text;
  let userID = req.body.userID;
  let artifactID = req.body.artifactID;
  Answer.save(userID, answer, artifactID);
  res.send("Data safed");
});

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
