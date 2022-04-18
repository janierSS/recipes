import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import styles from "./Recipe.module.css";
import { useTheme } from "../../hooks/useTheme";

const Recipe = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const {mode} = useTheme()

  return (
    <div className={`${styles.recipe} ${styles[mode]}`}>
      {isPending && <p className={styles.loading}>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {recipe && (
        <div>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => (<li key={ing}>{ing}</li>))}
          </ul>
          <p className={styles.method}>{recipe.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
