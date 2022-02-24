import React from "react";
import { Link } from "react-router-dom";
import TextCarousel from "../../components/InputTextCarousel/TextCarousel.jsx";
import QuestTextBox from "../../components/QuestTextBox/QuestTextBox.jsx";
import QuestTextBoxInput from "../../components/QuestTextBoxInput/QuestTextBoxInput.jsx";
import ImageCarousel from "../../components/InputImageCarousel/ImageCarousel.jsx";
import img1 from "../../assets/images/Stations/4_Affordanz/input_image_1.png";
import img2 from "../../assets/images/Stations/4_Affordanz/input_image_2.png";
import img3 from "../../assets/images/Stations/4_Affordanz/input_image_3.png";

function Test() {
  let [input, setInput] = React.useState([]);

  const handleCallback = (childData) => {
    if (childData !== "" && childData.trim().length !== 0) {
      setInput([...input, { childData }]);
    }
  };

  return (
    <div>
      {/*<QuestTextBox func={handleCallback} />*/}
      {<ImageCarousel img1={img1} img2={img2} img3={img3} />}
      {/*<TextCarousel
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
      />*/}
      {/*<Link to="/map">
          <button>Go to Map</button>
    </Link>*/}
    </div>
  );
}

export default Test;
