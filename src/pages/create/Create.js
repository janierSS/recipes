import React, { useState, useRef } from "react";
import styles from "./Create.module.css";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";


const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory()
  

  

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const methodHandler = (e) => {
    setMethod(e.target.value);
  };

  const cookingTimeHandler = (e) => {
    setCookingTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {title, method, ingredients, cookingTime: cookingTime + " minutes"}
    try{
      await projectFirestore.collection("recipes").add(doc)
      history.push("/")
    } catch(err){
      console.log(err)
    }
    
  };

  const newIngredientHandler = (e) => {
    setNewIngredient(e.target.value);
  };

  const ingredientsHandler = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();
    if (newIngredient && !ingredients.includes(ing)) {
      setIngredients([...ingredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  

  return (
    <div className={styles.create}>
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input type="text" onChange={titleHandler} value={title} required />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <div className={styles.ingredients}>
            <input
              type="text"
              onChange={newIngredientHandler}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button className="btn" onClick={ingredientsHandler}>
              add
            </button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method</span>
          <textarea
            type="text"
            onChange={methodHandler}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes)</span>
          <input
            type="number"
            onChange={cookingTimeHandler}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Create</button>
      </form>
    </div>
  );
};

export default Create;
