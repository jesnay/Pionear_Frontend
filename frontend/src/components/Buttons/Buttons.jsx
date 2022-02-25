import React, { Component } from "react";
import styles from "./Buttons.module.css";

class Buttons extends Component {
  state = {};
  render() {
    return <div className={styles.Buttons}>
      <button className= "BasicButton">Station beenden</button>
    </div>;
  }
}

export default Buttons;
