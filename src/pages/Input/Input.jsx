import React from "react";
import { Link } from "react-router-dom";
import styles from "./Input.module.css";
import ImageCarousel from "../../components/InputImageCarousel/ImageCarousel.jsx";
import Audio from "../../components/InputAudio/Audio.jsx";
import TextCarousel from "../../components/InputTextCarousel/TextCarousel.jsx";
import QuestAnswerPreview from "../../components/QuestAnswerPreview/QuestAnswerPreview.jsx";
import Buttons from "../../components/Buttons/Buttons.jsx";
import img1 from "../../assets/images/Stations/4_Affordanz/input_image_1.png";
import img2 from "../../assets/images/Stations/4_Affordanz/input_image_2.png";
import img3 from "../../assets/images/Stations/4_Affordanz/input_image_3.png";

//* Page: Input -> User can see / read / hear Input and Facts about the Station
function Input() {
  return (
    <div className={styles.Input}>
      {/*Topic and Location*/}
      <div className="Header">
        <h1>Affordanz</h1>
        <p className="spot">Unibibliothek: Handschriften</p>
      </div>
      {/*Shows a Collection of Images*/}
      <div className="ImageCarousel">
        <ImageCarousel img1={img1} img2={img2} img3={img3} />
      </div>
      {/*Audio Tag: Plays the Text Input as Audio*/}
      <div className="InputAudio">
        <Audio></Audio>
      </div>
      {/*Shows first Text as Carousel -> Swipe to read everything*/}
      <div className="TextCarousel1">
        <TextCarousel
          title="Praktiken"
          paragraph1="Hier sehen wir das wohl prestigeträchtigste Artefakt der
              Universitätsbibliothek, den Codex Manesse. Diese
              Liederhandschriftensammlung entstand im frühen 14. Jahrhundert -
              unserem Mittelalter. Dabei wurde die bis dato nur mündlich
              überlieferte Tradition des deutschen Minnesanges verschriftlicht."
          paragraph2="Mehr über diese Verschriftlichung, ihren Kontext und die
              zugrundeliegenden Absichten zu erfahren gehört zu den
              Fragestellungen des Sonderforschungsbereichs. Wieso hielten die
              Sammler der Lieder deren Niederschrift plötzlich für notwendig?
              Schon damals hatten die Sammler einen Anspruch auf
              Vollständigkeit. Heute gilt der Codex"
          paragraph3="Manesse als die umfangreichste deutsche Liederhandschrift des
              Mittelalters. Trotzdem blieben von den 426 etwa ein Drittel der
              Seiten leer und zahlreiche wurden nur zum Teil beschrieben. Es
              wurde also reichlich Platz gelassen. Pergament war damals sehr
              teuer und die Herstellung eines Buches ein zeitintensiver Prozess.
              Das gilt besonders für die vielen farben-"
          paragraph4="prächtigen Illustrationen. Genau diese Zeichnungen sind es, die
              den Codex heute so berühmt machen. Das Buch hat eine sehr
              wechselvolle Besitzgeschichte, die zwar nicht immer nachvollzogen
              werden kann, aber die heutigen Länder Schweiz, Niederlande,
              Frankreich und Deutschland umfasst, so dass man in diesem
              Zusammenhang auch von einer „Reise“"
          paragraph5="sprechen kann. Nach Heidelberg kam der Codex Manesse 1607, wo er
              in die ebenfalls berühmte Biblioteca Palatina aufgenommen wurde.
              Dort blieb er jedoch nur 15 Jahre, denn 1622 stand während des
              30jährigen Krieges die katholische Liga vor den Toren Heidelbergs
              vor der der Codex Manesse in Sicherheit gebracht wurde und
              schließlich über mehrere Stationen nach"
          paragraph6="Paris gelangte. Der Rest der Biblioteca Palatina wurde als Beute
              in den Vatikan gebracht. Anschließend bemühten sich mehrere
              deutsche Herrscher und Fürsten den Codex Manesse zurück nach
              Heidelberg zu bringen, was allerdings erst 1888 gelang. Gerade
              diese Bemühungen zeigen, welch hohes Prestige mit dem Besitz des
              Buches einherging - es erlangte eine Bedeutung"
          paragraph7="über den bloßen immanenten Nutzungscharakter – dem Lesen – hinaus."
        />
      </div>
      {/*Shows second Text as Carousel -> Swipe to read everything*/}
      <div className="TextCarousel2">
        <TextCarousel
          title="Theoretischer Zusammenhang"
          paragraph1="Damit sind wir bei einem weiteren vom Sonderforschungsbereich
          verwendeten Begriff angelangt – der Affordanz. Dabei geht es um
          „die durch die physischen Eigenschaften eines Gegenstandes
          vorgegebenen Nutzungsmöglichkeit(en).“ Das Konzept des
          amerikanischen Wahrnehmungspsychologen James J."
          paragraph2="Gibson geht davon aus, dass Dinge eine Handlung oder Handlungen
          aktiv anbieten. Ein Stuhl bietet beispielsweise an, sich
          hinzusetzen. In der Archäologie findet das Konzept mit Fokus auf
          die Funktionalität eines Objekts Anwendung. Material,
          Beschaffenheit, Oberfläche und Form werden genauso wie weitere
          materielle, visuelle und schriftliche Quellen untersucht,"
          paragraph3="um den wahrscheinlichen Nutzungscharakter zu rekonstruieren. In
          Bezug auf den Codex Manesse sehen wir zudem, dass sich die
          Nutzungsmöglichkeiten im Laufe der Zeit ändern. Zunächst ging es
          darum, eine Sammlung an Liedern zu erstellen und den mündlichen
          Minnesang festzuhalten - zu fixieren. Später konnte die
          Liedersammlung zum Lesen und Auffinden"
          paragraph4="von Informationen genutzt werden. Im Laufe der Zeit wurde der
          Codex dann zu einem Prestigeobjekt, dessen Besitz dem eigenen
          Ansehen nutzte. Heutzutage bietet sich der Codex Manesse als
          Forschungsobjekt an, das von uns analysiert werden kann. Im Rahmen
          einer Ausstellung wiederum ist seine Nutzungsmöglichkeit,
          Geschichte zu vermitteln. An dieser Stelle"
          paragraph5="bot es sich übrigens an, den Codex Manesse zur Erklärung des
          Begriffes der Affordanz zu nutzen."
          paragraph6=""
          paragraph7=""
        />
      </div>
      {/*Shows Preview of other User Answers*/}
      <div className="AnswerPreview">
        <Link to="/answers" style={{ textDecoration: "none" }}>
          <QuestAnswerPreview />
        </Link>
      </div>
      {/*Button to End Station completely*/}
      <div className="GoOnWithoutUserInput">
        <Link to="/map">
          <Buttons type="basic" text="Station beenden" />
        </Link>
      </div>
    </div>
  );
}

export default Input;
