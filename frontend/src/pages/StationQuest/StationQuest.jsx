import React from "react";
import "./StationQuest.module.css";
import icon_camera from "../../assets/images/Stations/4_Affordanz/icon_camera.png";
import user_image from "../../assets/images/Stations/4_Affordanz/user_image.jpg";
import { Form } from "react-bootstrap";
import QuestWave_V2 from "../../assets/images/Waves/QuestWave_V2.png";

function QuestNoImage() {
  return (
    <div>
      <div>
        <img className="questWave" src={QuestWave_V2} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest I</h1>
        <p className="questTask">
          Bewege Dich durch die Unibibliothek. Suche Dir ein schrifttragendes
          Objekt Deiner Wahl aus und mache davon ein Foto.
        </p>
      </div>

      <div className="image">
        <img className="noImage" src={icon_camera} alt="" />
      </div>
      <button className="buttonGrey">Ohne Foto</button>
    </div>
  );
}

function QuestImage() {
  return (
    <div>
      <div>
        <img className="questWave" src={QuestWave_V2} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest I</h1>
        <p className="questTask">
          Bewege Dich durch die Unibibliothek. Suche Dir ein schrifttragendes
          Objekt Deiner Wahl aus und mache davon ein Foto.
        </p>
      </div>
      <div className="image">
        <img className="userImage" src={user_image} alt="" />
      </div>
      <button className="button">Weiter</button>
    </div>
  );
}

function QuestTextField() {
  let [input, setInput] = React.useState(``);
  return (
    <div>
      <div>
        <img className="questWave" src={QuestWave_V2} alt="backgroundWave" />
      </div>
      <div>
        <h1 className="h1">Quest II</h1>
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

      <button className="button">Weiter</button>
    </div>
  );
}

export { QuestNoImage, QuestImage, QuestTextField };
