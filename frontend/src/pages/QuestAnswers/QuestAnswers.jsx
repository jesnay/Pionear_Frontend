import React, { useState } from "react";
import styles from "./QuestAnswers.module.css";
import QuestAnswerList from "../../components/QuestAnwerList/QuestAnswerList.jsx";
import Wave from "../../assets/images/Waves/QuestWave_V2.png";
import user0 from "../../assets/images/QuestAnswers/user0.jpg";
import user1 from "../../assets/images/QuestAnswers/user1.jpg";
import user2 from "../../assets/images/QuestAnswers/user2.jpg";
import user3 from "../../assets/images/QuestAnswers/user3.jpg";
import user4 from "../../assets/images/QuestAnswers/user4.jpg";
import user5 from "../../assets/images/QuestAnswers/user5.jpg";
import user6 from "../../assets/images/QuestAnswers/user6.jpg";
import user7 from "../../assets/images/QuestAnswers/user7.jpg";

function QuestAnswers() {
  let [user, setUser] = React.useState([
    {
      id: 0,
      image: user0,
      answers: ["a", "0"],
    },
    {
      id: 1,
      image: user1,
      answers: ["1", "b"],
    },
    {
      id: 2,
      image: user2,
      answers: ["a", "2"],
    },
    {
      id: 3,
      image: user3,
      answers: ["3", "b"],
    },
    {
      id: 4,
      image: user4,
      answers: ["a", "4"],
    },
    {
      id: 5,
      image: user5,
      answers: ["5", "b"],
    },
    {
      id: 6,
      image: user6,
      answers: ["a", "6"],
    },
    {
      id: 7,
      image: user7,
      answers: ["7", "b"],
    },
  ]);

  const openImage = (id) => {
    console.log(id);
    console.log(user[id].answers);
  };
  return (
    <div className={styles.UserAnswers}>
      <div>
        <img className="questWave" src={Wave} alt="backgroundWave" />
      </div>
      <div>
        <h1>Affordanz</h1>
        <p className="Caption">
          Das sagen andere Nutzer zu schrifttragenden Objekten
        </p>
      </div>

      <div className="ListElements">
        <div className="Left">
          <QuestAnswerList func={openImage} user={user[0]} />
          <QuestAnswerList func={openImage} user={user[2]} />
          <QuestAnswerList func={openImage} user={user[4]} />
          <QuestAnswerList func={openImage} user={user[6]} />
        </div>
        <div className="Right">
          <QuestAnswerList func={openImage} user={user[1]} />
          <QuestAnswerList func={openImage} user={user[3]} />
          <QuestAnswerList func={openImage} user={user[5]} />
          <QuestAnswerList func={openImage} user={user[7]} />
        </div>
      </div>
    </div>
  );
}

export default QuestAnswers;
