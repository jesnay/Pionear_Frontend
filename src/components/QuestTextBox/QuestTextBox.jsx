import React from "react";
import { Form } from "react-bootstrap";
import styles from "./QuestTextBox.module.css";

//*component: Text Box to type in Terms
function QuestTextBox(props) {
  let [input, setInput] = React.useState(``);

  //set textBox empty after submitting a Term
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  return (
    <div className={styles.TextBox}>
      <div>
        <Form className="formInput" autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              placeholder=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeypress}
            />
          </Form.Group>
          {/*Saves and dsplays term aufter submitting*/}
          <button
            className="button"
            onClick={() => {
              props.func(input);
            }}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default QuestTextBox;
