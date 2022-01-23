import React from "react";

function GetStation(stationID) {
  let [station, setStation] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/station/${stationID}`)
      .then((res) => res.json())
      .then((station) => setStation(station));
    console.log("getstationdata");
  }, []);

  //*mit React.useEffect
  /*React.useEffect(() => {
      fetch(`/api/answer`, {
        method: `POST`,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answer),
      }).then(() => {
        console.log("Answer added");
      });
    }, []);*/

  return station;
}

function SetAnswer(answer) {
  /*fetch(`/api/answer`, {
    method: `POST`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answer),
  });*/
  console.log("Hello");
  console.log(answer.text);
}

export { GetStation, SetAnswer };
