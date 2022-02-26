import React from "react";
import styles from "./QuestTextBoxInput.module.css";

function QuestTextBoxInput({ input }) {
  return (
    <div>
      <div>
        {input.map((input) => (
          <p className={styles.UserInput} key={input.childData}>
            {input.childData}
          </p>
        ))}
      </div>
    </div>
  );
}

export default QuestTextBoxInput;
