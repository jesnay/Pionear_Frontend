const express = require("express");
const Station = require("./classes/station.js");
const User = require("./classes/user.js");
const Answer = require("./classes/answer.js");

let app = express();
const port = 3001;
app.use(express.json());

app.get("/api", function (req, res) {
  res.json({ message: "Hello from Server" });
});

//*Get all Station Data per id
app.get("/api/station/:id", async function (req, res) {
  const stationID = req.params.id;
  const station = await Station.getAll(stationID);
  res.json({
    topic: station.topic,
    spot: station.spot,
    adress: station.adress,
    author: station.author,
    description: station.description,
    task_textField: station.task_textField,
    task_camera: station.task_camera,
    task_survey: station.task_survey,
    section1: station.section1,
    section2: station.section2,
    latitude: station.latitude,
    longitude: station.longitude,
  });
});

//*Get all User Data per id
app.get("/api/user/:id", async function (req, res) {
  const userID = req.params.id;
  const user = await User.getAll(userID);
  res.json({ name: user.name, email: user.email });
  //console.log(user.name);
});

//*Save given Data into Database
app.post("/api/answer", (req, res) => {
  let userID = req.body.userID;
  let stationID = req.body.stationID;
  let answer = req.body.text;
  for (let i = 0; i < answer.length; i++) {
    Answer.save(userID, answer[i], stationID);
  }
  res.send("Data safed");
});

app.listen(port, function () {
  console.log("App is listening on: http://localhost:" + port);
});
