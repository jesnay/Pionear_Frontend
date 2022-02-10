import React from "react";
import Image4 from "../../assets/images/Stations/4_Affordanz/image_4.png";
import Audio4 from "../../assets/audio/4_Affordanz.mp3";
import "./StationInfo.module.css";
import { Carousel } from "react-bootstrap";

function StationInfo() {
  return (
    <div className="App">
      <div>
        <h1>Affordanz</h1>
        <p>Unibibliothek: Handschriften</p>
      </div>
      <div className="images">
        <img src={Image4} alt="" />
      </div>
      <div>
        <audio controls="controls">
          <source src={Audio4} type="audio/ogg" />
          <source src={Audio4} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <div>
        <Carousel interval={null} className="InfoText">
          <Carousel.Item>
            <p>
              <strong>Praktiken</strong>
            </p>
            <p>
              Hier sehen wir das wohl prestigeträchtigste Artefakt der
              Universitätsbibliothek, den Codex Manesse. Diese
              Liederhandschriftensammlung entstand im frühen 14. Jahrhundert -
              unserem Mittelalter. Dabei wurde die bis dato nur mündlich
              überlieferte Tradition des deutschen Minnesanges verschriftlicht.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Mehr über diese Verschriftlichung, ihren Kontext und die
              zugrundeliegenden Absichten zu erfahren gehört zu den
              Fragestellungen des Sonderforschungsbereichs. Wieso hielten die
              Sammler der Lieder deren Niederschrift plötzlich für notwendig?
              Schon damals hatten die Sammler einen Anspruch auf
              Vollständigkeit. Heute gilt der Codex
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Manesse als die umfangreichste deutsche Liederhandschrift des
              Mittelalters. Trotzdem blieben von den 426 etwa ein Drittel der
              Seiten leer und zahlreiche wurden nur zum Teil beschrieben. Es
              wurde also reichlich Platz gelassen. Pergament war damals sehr
              teuer und die Herstellung eines Buches ein zeitintensiver Prozess.
              Das gilt besonders für die vielen farben-
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              prächtigen Illustrationen. Genau diese Zeichnungen sind es, die
              den Codex heute so berühmt machen. Das Buch hat eine sehr
              wechselvolle Besitzgeschichte, die zwar nicht immer nachvollzogen
              werden kann, aber die heutigen Länder Schweiz, Niederlande,
              Frankreich und Deutschland umfasst, so dass man in diesem
              Zusammenhang auch von einer „Reise“
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              sprechen kann. Nach Heidelberg kam der Codex Manesse 1607, wo er
              in die ebenfalls berühmte Biblioteca Palatina aufgenommen wurde.
              Dort blieb er jedoch nur 15 Jahre, denn 1622 stand während des
              30jährigen Krieges die katholische Liga vor den Toren Heidelbergs
              vor der der Codex Manesse in Sicherheit gebracht wurde und
              schließlich über mehrere Stationen nach
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Paris gelangte. Der Rest der Biblioteca Palatina wurde als Beute
              in den Vatikan gebracht. Anschließend bemühten sich mehrere
              deutsche Herrscher und Fürsten den Codex Manesse zurück nach
              Heidelberg zu bringen, was allerdings erst 1888 gelang. Gerade
              diese Bemühungen zeigen, welch hohes Prestige mit dem Besitz des
              Buches einherging - es erlangte eine Bedeutung
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              über den bloßen immanenten Nutzungscharakter – dem Lesen – hinaus.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <Carousel interval={null} className="InfoText">
          <Carousel.Item>
            <p>
              <strong>Theoretischer Zusammenhang</strong>
            </p>
            <p>
              Damit sind wir bei einem weiteren vom Sonderforschungsbereich
              verwendeten Begriff angelangt – der Affordanz. Dabei geht es um
              „die durch die physischen Eigenschaften eines Gegenstandes
              vorgegebenen Nutzungsmöglichkeit(en).“ Das Konzept des
              amerikanischen Wahrnehmungspsychologen James J.
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              Gibson geht davon aus, dass Dinge eine Handlung oder Handlungen
              aktiv anbieten. Ein Stuhl bietet beispielsweise an, sich
              hinzusetzen. In der Archäologie findet das Konzept mit Fokus auf
              die Funktionalität eines Objekts Anwendung. Material,
              Beschaffenheit, Oberfläche und Form werden genauso wie weitere
              materielle, visuelle und schriftliche Quellen untersucht,
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              um den wahrscheinlichen Nutzungscharakter zu rekonstruieren. In
              Bezug auf den Codex Manesse sehen wir zudem, dass sich die
              Nutzungsmöglichkeiten im Laufe der Zeit ändern. Zunächst ging es
              darum, eine Sammlung an Liedern zu erstellen und den mündlichen
              Minnesang festzuhalten - zu fixieren. Später konnte die
              Liedersammlung zum Lesen und Auffinden
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              von Informationen genutzt werden. Im Laufe der Zeit wurde der
              Codex dann zu einem Prestigeobjekt, dessen Besitz dem eigenen
              Ansehen nutzte. Heutzutage bietet sich der Codex Manesse als
              Forschungsobjekt an, das von uns analysiert werden kann. Im Rahmen
              einer Ausstellung wiederum ist seine Nutzungsmöglichkeit,
              Geschichte zu vermitteln. An dieser Stelle
            </p>
          </Carousel.Item>
          <Carousel.Item>
            <p>
              bot es sich übrigens an, den Codex Manesse zur Erklärung des
              Begriffes der Affordanz zu nutzen.
            </p>
          </Carousel.Item>
        </Carousel>
      </div>

      <button className="StationBeenden">Station beenden</button>
    </div>
  );
}

export default StationInfo;
