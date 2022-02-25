import React from "react";
import styles from "./Buttons.module.css";

function Buttons({ type, text }) {
  if (type === "basic") {
    return (
      <div className={styles.Buttons}>
        <button className="BasicButton">{text}</button>
      </div>
    );
  }
  else if (type=== "cyan") {
    return (
      <div className={styles.Buttons}>
        <button className="CyanButton">{text}</button>
      </div>
    );
  }
}

export default Buttons;
