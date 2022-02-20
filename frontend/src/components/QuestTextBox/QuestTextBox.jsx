import React from "react";
import { Form } from "react-bootstrap";
import styles from "./QuestTextBox.module.css";

function QuestTextBox() {
  let [input, setInput] = React.useState(``);
  return (
    <div>
      <div>
        <Form className={styles.formInput} autocomplete="off">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              placeholder=""
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <div>
        <p>{input}</p>
      </div>
    </div>
  );
}

export default QuestTextBox;
