import React from "react";
import TextCarousel from "../../components/InputTextCarousel/TextCarousel.jsx";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <div>
        <p>Ich bin die Test.jsx</p>
      </div>
      <TextCarousel></TextCarousel>
      <div>
        <Link to="/map">
          <button>Go to Map</button>
        </Link>
      </div>
    </div>
  );
}

export default Test;
