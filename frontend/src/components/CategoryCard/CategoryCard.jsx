import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryCard.module.css";

//*component: Display all possible Categories to choose from
function CategoryCard() {
  return (
    <div className={styles.Category}>
      <p>Welche Studienfelder interessieren dich?</p>
      <div>
        <Link to="/map">
          <button>Geisteswissenschaften und Theologie</button>
        </Link>
        <button>Jura, Wirtschafts- und Sozialwissenschaften</button>
        <button>Medizin</button>
        <button>
          Naturwissenschaften, Ingenieurwissenschaften, Mathematik {"& "}
          Informatik
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
