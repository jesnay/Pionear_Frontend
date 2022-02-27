import React from "react";
import styles from "./QuestAnswerCard.module.css";

import exitButton from "../../assets/buttons/x.png";
import user0 from "../../assets/images/QuestAnswers/user0.jpg";

function QuestAnswerCard(props) {
  return (
    <div className={styles.AnswerCard}>
      <img className="exitButton" src={exitButton} alt="" />
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
