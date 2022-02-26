import React from "react";
import styles from "./Quest.module.css";
import QuestTextBox from "../../components/QuestTextBox/QuestTextBox.jsx";
import QuestTextBoxInput from "../../components/QuestTextBoxInput/QuestTextBoxInput.jsx";

function Quest() {
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
    <div className={styles.TextInput}>
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
    </div>
  );
}

export default Quest;
