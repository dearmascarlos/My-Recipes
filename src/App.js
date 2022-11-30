import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const getRecipes = async () => {
  const response = await axios.get('http://localhost:2222/api/recipes')
  return response.data
}

function App() {
  const [recipes, setRecipes] = useState([])

  const listRecipes = async () => {
    const recipes = await getRecipes()
    setRecipes(recipes)
  }

  const renderRecipes = () => {
    return recipes && recipes.map((recipe, i) => <div key={i}>{ recipe.name }</div>)
  }

  useEffect( () => {
    listRecipes()
  },[recipes])

  return (
    <div className="App">
      <h1>MY RECIPES</h1>
      {renderRecipes()}
    </div>
  );
}

export default App;
