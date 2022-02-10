import "./Audio.module.css";
import React from "react";
import Audio4 from "../../assets/audio/4_Affordanz.mp3";

function Audio() {
  return (
    <div>
      <audio controls="controls">
        <source src={Audio4} type="audio/ogg" />
        <source src={Audio4} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Audio;
