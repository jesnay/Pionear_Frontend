import styles from "./ImageCarousel.module.css";
import React from "react";
// import { Carousel } from "react-bootstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function ImageCarousel({ img1, img2, img3 }) {
  return (
    <div className={styles.Image}>
      <OwlCarousel className="owl-theme" loop margin={-10} autoWidth center nav>
        <div className="item">
          <img src={img1} alt=""></img>
        </div>
        <div className="item">
          <img src={img2} alt=""></img>
        </div>
        <div className="item">
          <img src={img3} alt=""></img>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default ImageCarousel;
