import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeList.module.css";

const RecipeList = ({ recipes }) => {

  if (recipes.length === 0){
    return <div className="error">No recipes to load...</div>
  }
  
  return (
    <div className={styles["recipe-list"]}>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={styles.card}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
