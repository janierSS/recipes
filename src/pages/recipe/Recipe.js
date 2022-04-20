import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from "./Recipe.module.css";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

const Recipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const {mode} = useTheme()

  useEffect(() => {
    setIsPending(true)
    const unsub = projectFirestore.collection("recipes").doc(id).onSnapshot((doc) => {
      if (doc.exists){
        setIsPending(false)
        setRecipe(doc.data())
      }else{
        setError("Could not access to the recipe")
        setIsPending(false)
      }
    })

    return () => unsub()
  }, [id])

  const updateHandler = () => {
    projectFirestore.collection("recipes").doc(id).update({title: "ohhh yes"})
  }

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
          <button className={`${styles.button} ${styles[mode]}`} onClick={updateHandler}>Update me</button>
        </div>
      )}
    </div>
  );
};

export default Recipe;
