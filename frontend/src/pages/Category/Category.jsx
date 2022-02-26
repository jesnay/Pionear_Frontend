import React from "react";
import "./Category.module.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div>
      <p>Hier die Category Componenten einfügen</p>
      <Link to="/map">
      <div className="card"></div>
        <button>Weiter</button>
      </Link>
    </div>
  );
}

export default Category;
