import React from "react";
import "./StationQuest.css";
import icon_camera from "../../assets/images/Stations/4_Affordanz/icon_camera.png";
import { Form } from "react-bootstrap";
import QuestWave_V2 from "../../assets/images/Waves/QuestWave_V2.png";

function QuestNoImage() {
  return (
    <div>
      <div>
        <h1>Aufgabe</h1>
        <p>
          Bewege Dich durch die Unibibliothek. Suche Dir ein schrifttragendes
          Objekt Deiner Wahl aus und mache davon ein Foto.
        </p>
      </div>
      <div>
        <img src={icon_camera} alt="" />
      </div>
      <button>Ohne Foto</button>
    </div>
  );
}

function QuestImage() {
  return (
    <div>
      <div>
        <h1>Aufgabe</h1>
        <p>
          Bewege Dich durch die Unibibliothek. Suche Dir ein schrifttragendes
          Objekt Deiner Wahl aus und mache davon ein Foto.
        </p>
      </div>
      <div>
        <img src={icon_camera} alt="" />
      </div>
      <button>Weiter</button>
    </div>
  );
}

function QuestTextField() {
  let [input, setInput] = React.useState(``);
  return (
    <div>
      <div className="backgroundWave">
        <img src={QuestWave_V2} alt="backgroundWave" />
      </div>
      <div>
        <h1>Quest</h1>
        <p className="questTask">
          Welchen Nutzen kann dieses Objekt haben? Versuche das Objekt aus
          verschiedenen Perspektiven zu betrachten.
        </p>
      </div>
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

      <button>xxx</button>
    </div>
  );
}

export { QuestNoImage, QuestImage, QuestTextField };
