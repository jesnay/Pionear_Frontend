import React from "react";

function GetStation(stationID) {
  let [station, setStation] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/station/${stationID}`)
      .then((res) => res.json())
      .then((station) => setStation(station));
  }, []);

  return station;
}

function SetAnswer(answer) {
  fetch(`/api/answer`, {
    method: `POST`,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answer),
  });
}

export { GetStation, SetAnswer };
