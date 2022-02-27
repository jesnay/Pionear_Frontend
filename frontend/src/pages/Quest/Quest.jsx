import React from "react";
import styles from "./Quest.module.css";
import QuestTextBox from "../../components/QuestTextBox/QuestTextBox.jsx";
import QuestTextBoxInput from "../../components/QuestTextBoxInput/QuestTextBoxInput.jsx";
import Wave from "../../assets/images/Waves/QuestWave_V2.png";
import QuestPhotoPreview from "../../components/QuestPhotoPreview/QuestPhotoPreview.jsx";
import userImage from "../../assets/images/Stations/4_Affordanz/quest_userImage.jpg";
import { Link } from "react-router-dom";
import { GetStation, SetAnswer } from "../../ConnectionToDatabase.js";

function QuestTakeImage() {
  return (
    <div className={styles.Quest}>
      <div>
        <img className="questWave" src={Wave} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest I</h1>
        <p className="questTask1">Bewege Dich durch die Unibibliothek.</p>
        <p className="questTask2">
          Suche Dir ein schrifttragendes Objekt Deiner Wahl aus und mache
          <br />
          davon ein Foto.
        </p>
      </div>
      <div className="PhotoButton">
        <Link to="/questb">
          <button>take pic</button>
        </Link>
      </div>
    </div>
  );
}
function QuestPreviewImage() {
  return (
    <div className={styles.Quest}>
      <div>
        <img className="questWave" src={Wave} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest I</h1>
        <p className="questTask1">Bewege Dich durch die Unibibliothek.</p>
        <p className="questTask2">
          Suche Dir ein schrifttragendes Objekt Deiner Wahl aus und mache
          <br />
          davon ein Foto.
        </p>
      </div>
      <div className="PhotoPreview">
        <QuestPhotoPreview image={userImage} />
      </div>
      <div>
        <Link to="/questc">
          <button>weiter</button>
        </Link>
      </div>
    </div>
  );
}
function QuestUserInput() {
  let [input, setInput] = React.useState([]);

  const handleCallback = (childData) => {
    if (childData !== "" && childData.trim().length !== 0) {
      setInput([...input, { childData }]);
    }
  };

  function handleRemove(childData) {
    let index = input.indexOf(childData);
    console.log(index);

    setInput(input.filter((input, i) => i !== index));
    if (index !== -1) {
      input.splice(index, 1);
    }
    console.log(input);
  }
  return (
    <div className={styles.Quest}>
      <div>
        <img className="questWave" src={Wave} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest II</h1>
        <p className="questTask1">
          Welchen Nutzen kann die Schrift auf dem Objekt haben? Schreib Deine
          Gedanken zu dem ausgesuchten Objekt auf.
        </p>
      </div>
      <div className="UserTyping">
        <QuestTextBox func={handleCallback} />
      </div>
      <div className="UserInput">
        <QuestTextBoxInput input={input} />
      </div>
      <div>
        {input.map((input) => (
          <button
            className={styles.deleteButton}
            key={input.childData}
            onClick={() => {
              handleRemove(input, input.childData);
            }}
          >
            1
          </button>
        ))}
      </div>
      <div>
        <Link to="/input">
          <button
            onClick={() => {
              let dbArray = [];
              for (let i = 0; i < input.length; i++) {
                dbArray[i] = input[i].childData;
              }
              let answer = {
                userID: Math.floor(Math.random() * 10000) + 1,
                text: dbArray,
                stationID: 5,
              };
              SetAnswer(answer);
            }}
          >
            end quest
          </button>
        </Link>
      </div>
    </div>
  );
}

export { QuestTakeImage, QuestPreviewImage, QuestUserInput };
