import React from "react";
import styles from "./Buttons.module.css";
import x from "../../assets/buttons/x.png";
import llll from "../../assets/buttons/llll.png";
import image from "../../assets/buttons/icon_takeImage.png";

//*component: Differen Button types
function Buttons(props) {
  if (props.type === "basic") {
    return (
      <div className={styles.Buttons}>
        <button className="BasicButton">{props.text}</button>
      </div>
    );
  } else if (props.type === "cyan") {
    return (
      <div className={styles.Buttons}>
        <button className="CyanButton">{props.text}</button>
      </div>
    );
  } else if (props.type === "close") {
    return (
      <div className={styles.Buttons}>
        <button
          className="XButton"
          onClick={() => {
            props.func();
          }}
        >
          <img src={x}></img>
        </button>
      </div>
    );
  } else if (props.type === "inactive") {
    return (
      <div className={styles.Buttons}>
        <button className="InactiveButton"> {props.text} </button>
      </div>
    );
  } else if (props.type === "category") {
    return (
      <div className={styles.Buttons}>
        <button className="CategoryButton">
          <img src={llll}></img>
        </button>
      </div>
    );
  } else if (props.type === "image") {
    return (
      <div className={styles.Buttons}>
        <button className="ImageButton">
          <img src={image}></img>
        </button>
      </div>
    );
  }
}

export default Buttons;
