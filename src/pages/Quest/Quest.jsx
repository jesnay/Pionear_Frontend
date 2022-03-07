import React from "react";
import { Link } from "react-router-dom";
import styles from "./Quest.module.css";
import QuestTextBox from "../../components/QuestTextBox/QuestTextBox.jsx";
import QuestTextBoxInput from "../../components/QuestTextBoxInput/QuestTextBoxInput.jsx";
import QuestPhotoPreview from "../../components/QuestPhotoPreview/QuestPhotoPreview.jsx";
//import { SetAnswer } from "../../ConnectionToDatabase.js";
import Buttons from "../../components/Buttons/Buttons.jsx";
import Wave from "../../assets/images/Waves/QuestWave_V2.png";
import userImage from "../../assets/images/Stations/4_Affordanz/quest_userImage.jpg";
import x from "../../assets/buttons/x.png";

//*page: 2 different Quests: Take an Image & Type in some Terms

//Quest: Take Picture
function QuestTakeImage() {
  return (
    <div className={styles.Quest}>
      {/*Header & Background*/}
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
      {/*Opens your Phone Camera*/}
      <div className="PhotoButton">
        <Link to="/questb">
          <Buttons type="image" />
        </Link>
      </div>
      {/*Skip taking Picture*/}
      <div className="SkipButton">
        <Link to="/questc">
          <Buttons type="inactive" text="Ohne Foto" />
        </Link>
      </div>
    </div>
  );
}

//Quest: See taken Picture
function QuestPreviewImage() {
  return (
    <div className={styles.Quest}>
      {/*Header & Background*/}
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
      {/*Preview of the taken Picture*/}
      <div className="PhotoPreview">
        <QuestPhotoPreview image={userImage} />
      </div>
      <div>
        {/*Go to next Quest*/}
        <div className="NextQuest">
          <Link to="/questc">
            <Buttons type="basic" text="Weiter" />
          </Link>
        </div>
      </div>
    </div>
  );
}

//Quest: Type in Terms
function QuestUserInput() {
  //Array of User Inputs
  let [input, setInput] = React.useState([]);

  //saves typed Term in Array
  const handleCallback = (childData) => {
    if (childData !== "" && childData.trim().length !== 0) {
      setInput([...input, { childData }]);
    }
  };

  //deletes Term out of Array
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
      {/*Header & Background*/}
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
      {/*Text Box to type in -> Submit with Enter*/}
      <div className="UserTyping">
        <QuestTextBox func={handleCallback} />
      </div>
      {/*Show the Users Input*/}
      <div className="InputList">
        <div className="UserInput">
          <QuestTextBoxInput input={input} />
        </div>
        {/*Delete specific Input*/}
        {/*<div className="delete">
          {input.map((input) => (
            <button
              className="deleteButton"
              key={input.childData}
              onClick={() => {
                handleRemove(input, input.childData);
              }}
            >
              <img src={x}></img>{" "}
            </button>
          ))}
            </div>*/}
      </div>
      {/*End Quest and save Input in Database*/}
      <div className="EndQuest">
        <Link to="/input">
          <button
            className="EndQuestButton"
            onClick={() => {
              /*
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
              */ console.log(
                "save answer into Database"
              );
            }}
          >
            Weiter
          </button>
        </Link>
      </div>
    </div>
  );
}

export { QuestTakeImage, QuestPreviewImage, QuestUserInput };
