import React from "react";
import styles from "./QuestAnswerList.module.css";

//*component: List Element -> shows Image, that other users have taken
function QuestAnswerList(props) {
  return (
    <div className={styles.Image}>
      <button
        onClick={() => {
          props.func(props.user.id);
        }}
      >
        <img src={props.user.image} alt="" />
      </button>
    </div>
  );
}

export default QuestAnswerList;
