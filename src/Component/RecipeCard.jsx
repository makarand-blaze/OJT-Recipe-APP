//This component is for showing the recipes in card 

import React,{ useState } from 'react'
import RecipeIngredients from './RecipeIngredients';

const RecipeCard = ({ title, image, url, ingredients }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <a href={url}> HOW TO MAKE!! </a> 
      <button onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeIngredients ingredients={ingredients} />}
    </div>
  );
};

export default RecipeCard;
