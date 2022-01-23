import React from "react";
import Image1 from "../../assets/images/Stations/1_Olympia/image_1.png";
import "./StationInfo.css";

function StationInfo() {
  return (
    <div className="App">
      <div>
        <h1>Affordanz</h1>
        <p>Unibibliothek: Handschriften</p>
        <p>Plöck 107-109, 69117 Heidelberg</p>
      </div>
      <div>
        <img src={Image1} alt="" />
      </div>
      <div className="InfoText">
        <div>
          <p>
            <strong>Praktiken</strong>
          </p>
          <p>
            Hier sehen wir das wohl prestigeträchtigste Artefakt der
            Universitätsbibliothek, den Codex Manesse. Diese
            Liederhandschriftensammlung entstand im frühen 14. Jahrhundert -
            unserem Mittelalter. Dabei wurde die bis dato nur mündlich
            überlieferte Tradition des deutschen Minnesanges verschriftlicht.
            Mehr über diese Verschriftlichung, ihren Kontext und die
            zugrundeliegenden Absichten zu erfahren gehört zu den
            Fragestellungen des Sonderforschungsbereichs. Wieso hielten die
            Sammler der Lieder deren Niederschrift plötzlich für notwendig?
          </p>
        </div>
        <div>
          <p>
            <strong>Theoretischer Zusammenhang</strong>
          </p>
          <p>
            Damit sind wir bei einem weiteren vom Sonderforschungsbereich
            verwendeten Begriff angelangt – der Affordanz. Dabei geht es um „die
            durch die physischen Eigenschaften eines Gegenstandes vorgegebenen
            Nutzungsmöglichkeit(en).“ Das Konzept des amerikanischen
            Wahrnehmungspsychologen James J. Gibson geht davon aus, dass Dinge
            eine Handlung oder Handlungen aktiv anbieten. Ein Stuhl bietet
            beispielsweise an, sich hinzusetzen. In der Archäologie findet das
            Konzept mit Fokus auf die Funktionalität eines Objekts Anwendung.
            Material, Beschaffenheit, Oberfläche und Form werden genauso wie
            weitere materielle, visuelle und schriftliche Quellen untersucht, um
            den wahrscheinlichen Nutzungscharakter zu rekonstruieren.
          </p>
        </div>
      </div>

      <button>Station beenden</button>
    </div>
  );
}

export default StationInfo;
