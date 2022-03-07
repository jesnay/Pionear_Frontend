import React from "react";
import styles from "./QuestPhotoPreview.module.css";

//*component: Shows taken Picture
function QuestPhotoPreview({ image }) {
  return (
    <div className={styles.PhotoPreview}>
      <img src={image} alt="" />
    </div>
  );
}

export default QuestPhotoPreview;
