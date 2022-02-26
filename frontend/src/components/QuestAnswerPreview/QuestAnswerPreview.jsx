import React from "react";
import styles from "./QuestAnswerPreview.module.css";
import Wave from "../../assets/images/Waves/QuestWave_V2.png";
import user0 from "../../assets/images/QuestAnswers/user0.jpg";
import user1 from "../../assets/images/QuestAnswers/user1.jpg";

function QuestAnswerPreview() {
  return (
    <div
      className={styles.AnswerPreview}
      role="button"
      onClick={() => {
        console.log("hi");
      }}
    >
      <div>
        <img className="questWave" src={Wave} alt="backgroundWave" />
        <h3>Sieh dir an wie andere die Quest gelöst haben!</h3>
        <p>Letzte Aktivität vor 2h</p>
      </div>
      <div>
        <img className="Preview1" src={user0} />
        <img className="Preview2" src={user1} />
      </div>
    </div>
  );
}

export default QuestAnswerPreview;
