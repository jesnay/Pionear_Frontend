import React from "react";
import styles from "./Category.module.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import MapImage from "../../assets/images/Map.png";

function Category() {
  return (
    <div>
      <div className={styles.Map}>
        <div className="Brightness">
          <img className="MapImage" src={MapImage} alt="MapImage" />
        </div>
        <div className="CategoryCard">
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default Category;
