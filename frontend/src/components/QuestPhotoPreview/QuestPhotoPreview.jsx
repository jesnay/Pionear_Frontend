import React from "react";
import styles from "./QuestPhotoPreview.module.css";

function QuestPhotoPreview({ image }) {
  return (
    <div className={styles.PhotoPreview}>
      <img src={image} />
    </div>
  );
}

export default QuestPhotoPreview;
