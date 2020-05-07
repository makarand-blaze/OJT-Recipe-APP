//this component is for showing the list of all ingredients in the recipe
import React from "react";

const RecipeIngredients = ({ingredients}) => {
  return ingredients.map(ingredient => {
    return (
      <ul className="ingredient-list">
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">Weight - {ingredient.weight}</li>
      </ul>
    );
  });
}

export default RecipeIngredients;