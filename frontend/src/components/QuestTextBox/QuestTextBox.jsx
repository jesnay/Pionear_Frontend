import React from "react";
import { Form } from "react-bootstrap";
import styles from "./QuestTextBox.module.css";

function QuestTextBox(props) {
  let [input, setInput] = React.useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div>
        <Form
          className={styles.formInput}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              placeholder=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
          <button
            className={styles.button}
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

/*<div>
        <p>{input}</p>
      </div>*/

//onChange={(e) => setInput(e.target.value)}
