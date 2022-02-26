import React from "react";
import styles from "./QuestAnswerCard.module.css";

import exitButton from "../../assets/buttons/x.png";
import user0 from "../../assets/images/QuestAnswers/user0.jpg";

function QuestAnswerCard(input) {
  return (
    <div className={styles.AnswerCard}>
      <img className="exitButton" src={exitButton} alt="" />
      <div className="card">
        <img className="UserImage" src={user0} alt="" />

        <div className="UserInput">
          <p>Erweckend</p>
          <p>Begleitend</p>
          <p>Aufmerksamkeit erzeugend</p>
        </div>
      </div>
    </div>
  );
}

export default QuestAnswerCard;
