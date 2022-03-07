import React from "react";
import styles from "./QuestAnswerCard.module.css";

//*component: Card showing the Answer of an other User
function QuestAnswerCard(props) {
  return (
    <div className={styles.AnswerCard}>
      <div className="card">
        <img className="UserImage" src={props.user.image} alt="" />
        <div className="UserInput">
          {props.user.answers.map((answer) => (
            <p key={answer}>{answer}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuestAnswerCard;
