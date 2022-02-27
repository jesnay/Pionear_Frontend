import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "./TextCarousel.module.css";

function TextCarousel({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  paragraph7,
}) {
  return (
    <div>
      <Carousel interval={null} className={styles.InfoText}>
        {!paragraph1 ? null : (
          <Carousel.Item>
            <p className={styles.title}>{title}</p>
            <p>{paragraph1}</p>
          </Carousel.Item>
        )}
        {!paragraph2 ? null : (
          <Carousel.Item>
            <p>{paragraph2}</p>
          </Carousel.Item>
        )}
        {!paragraph3 ? null : (
          <Carousel.Item>
            <p>{paragraph3}</p>
          </Carousel.Item>
        )}
        {!paragraph4 ? null : (
          <Carousel.Item>
            <p>{paragraph4}</p>
          </Carousel.Item>
        )}
        {!paragraph5 ? null : (
          <Carousel.Item>
            <p>{paragraph5}</p>
          </Carousel.Item>
        )}

        {!paragraph6 ? null : (
          <Carousel.Item>
            <p>{paragraph6}</p>
          </Carousel.Item>
        )}

        {!paragraph6 ? null : (
          <Carousel.Item>
            <p>{paragraph7}</p>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
}
//{state ? <QuestAnswerCard user={userCard} /> : null}

export default TextCarousel;
