import React from "react";
import { Form } from "react-bootstrap";

function QuestTextBox() {
  let [input, setInput] = React.useState(``);
  return (
    <div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="formLabel">Mögliche Affordanz</Form.Label>
            <Form.Control
              placeholder="z.B. Informationen liefern"
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
