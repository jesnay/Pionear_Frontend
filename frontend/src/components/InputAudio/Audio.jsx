import React from "react";
import styles from "./Audio.module.css";
import input from "../../assets/audio/input.mp3";

//*component: Displays Audio matching the Input Text
function Audio() {
  return (
    <div>
      <audio
        controls="controls"
        className={styles.Audio}
        controlsList="noplaybackrate"
      >
        <source src={input} type="audio/ogg" />
        <source src={input} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Audio;
