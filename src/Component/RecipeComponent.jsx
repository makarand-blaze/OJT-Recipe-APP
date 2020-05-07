/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect, useState} from 'react'
import Axios from 'axios'
import './RecipeComponent.css'
import RecipeCard from './RecipeCard';

const RecipeApp = () =>{
  //API authentication keys
  const APP_ID = "2aafc3e9";
  const APP_KEY = "ed18f79f462512678bfafe7d03cdf879";
  
  //State hooks defined 
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  //API url
  const API = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(()=>{
    getRecipes();
  }, [query]);

  //Async and Await method to fetch data from API
  const getRecipes = async() => {
    const response = await Axios.get(API);
    setRecipes(response.data.hits);
    console.log(response.data.hits)
  }

  //this function will update search state by its value to prevent more number of hits on api
  const updateSearch = e =>{
    setSearch(e.target.value);
  } 

  //this function will then get the search parameter from search state and update the queary state 
  //and hit the api with the whole value.
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
  <div className="RecipeApp">
    <h1 align="middle">Food Recipe App</h1>
    <form className="search-form" onSubmit={getSearch}>
      <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search for your favourite food"/>
      <button className="search-button">  Search</button>
    </form>
    <div className="recipes">
      {recipes.map(recipe =>(
        <RecipeCard 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}/>
      ))}
    </div>
  </div>
  )
}

export default RecipeApp;