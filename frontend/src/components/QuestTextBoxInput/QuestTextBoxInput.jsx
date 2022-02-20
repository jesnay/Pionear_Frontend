import React from "react";
import styles from "./QuestTextBoxInput.module.css";

function QuestTextBoxInput({ input }) {
  return (
    <div>
      <p className={styles.UserInput}>{input}</p>
    </div>
  );
}

export default QuestTextBoxInput;
