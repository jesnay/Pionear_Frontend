import React from "react";
import styles from "./QuestTextBoxInput.module.css";

function QuestTextBoxInput({ input }) {
  console.log(input);
  return (
    <div>
      {input.map((input) => (
        <p className={styles.UserInput} key={input.childData}>
          {input.childData}
        </p>
      ))}
    </div>
  );
}

export default QuestTextBoxInput;
