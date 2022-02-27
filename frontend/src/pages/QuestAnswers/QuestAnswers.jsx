import React, { useState } from "react";
import styles from "./QuestAnswers.module.css";
import QuestAnswerCard from "../../components/QuestAnswerCard/QuestAnswerCard.jsx";

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
import { Link } from "react-router-dom";

function QuestAnswers() {
  const [user, setUser] = React.useState([
    {
      id: 0,
      image: user0,
      answers: ["Erweckend", "Begleitend", "Aufmerksamkeit erzeugen"],
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
  const [state, setState] = React.useState(false);
  const [userCard, setCard] = React.useState({
    id: 0,
    image: "",
    answers: [],
  });
  const openImage = (id) => {
    //console.log(id);
    //console.log(user[id].answers);
    setState(true);
    setCard({
      id: user[id].id,
      image: user[id].image,
      answers: user[id].answers,
    });
  };

  return (
    <div className={styles.UserAnswers}>
      <div className={state ? "BlurEffect" : ""}>
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
        <div>
          <Link to="/map">
            <button>end station</button>
          </Link>
        </div>
      </div>

      <div className="QuestAnswerCard">
        {console.log(userCard)}
        {state ? <QuestAnswerCard user={userCard} /> : null}
        {state ? (
          <button
            onClick={() => {
              setState(false);
            }}
          >
            close
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default QuestAnswers;
