import React from "react";
import "./StationQuest.css";
import icon_camera from "../../assets/images/Stations/4_Affordanz/icon_camera.png";

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
  return (
    <div>
      <div>
        <h1>Aufgabe</h1>
        <p>
          Welchen Nutzen kann dieses Objekt haben? Versuche das Objekt aus
          verschiedenen Perspektiven zu betrachten.
        </p>
      </div>
      <div></div>
      <button>xxx</button>
    </div>
  );
}

export { QuestNoImage, QuestImage, QuestTextField };
