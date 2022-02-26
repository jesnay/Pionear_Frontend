import React from "react";
import styles from "./QuestAnswerList.module.css";

function QuestAnswerList(props) {
  return (
    <div className={styles.Image}>
      <button
        onClick={() => {
          props.func(props.user.id);
        }}
      >
        <img src={props.user.image} />
      </button>
    </div>
  );
}

export default QuestAnswerList;
