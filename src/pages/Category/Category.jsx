import React from "react";
import styles from "./Category.module.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard.jsx";
import MapImage from "../../assets/images/Map.png";

//* Page: User can choose a Category
function Category() {
  return (
    <div>
      <div className={styles.Map}>
        {/* Display Map in Background*/}
        <div className="Brightness">
          {/* <img className="MapImage" src={MapImage} alt="MapImage" /> */}
        </div>
        {/* Display multiple Categories*/}
        <div className="CategoryCard">
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default Category;
