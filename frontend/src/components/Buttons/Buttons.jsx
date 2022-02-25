import React from "react";
import styles from "./Buttons.module.css";
import x from "../../assets/buttons/x.png";

function Buttons({ type, text }) {
  if (type === "basic") {
    return (
      <div className={styles.Buttons}>
        <button className="BasicButton">{text}</button>
      </div>
    );
  } else if (type === "cyan") {
    return (
      <div className={styles.Buttons}>
        <button className="CyanButton">{text}</button>
      </div>
    );
  } else if (type === "close") {
    return (
      <div className={styles.Buttons}>
        <button className="XButton">
          {" "}
          <img src={x}></img>{" "}
        </button>
      </div>
    );
  } else if (type === "inactive") {
    return (
      <div className={styles.Buttons}>
        <button className="InactiveButton"> {text} </button>
      </div>
    );
  }
  else if (type === "category") {
    return (
      <div className={styles.Buttons}>
        <button className="CategoryButton"> {text} </button>
      </div>
    );
  }
}

export default Buttons;
