import React from 'react'
import { useEffect, useState } from 'react'
import getRecipes from '../services/recipes.services'
import RecipeCard from './RecipeCard'
import Grid from '@mui/system/Unstable_Grid/Grid'

function RecipesList() {
      const [recipes, setRecipes] = useState([])
    
      const listRecipes = async () => {
        const recipes = await getRecipes()
        setRecipes(recipes)
      }
    
      const renderRecipes = () => {
        return recipes && recipes.map((recipe, i) => <Grid key={i} data-item xs={2}><RecipeCard data={recipe} /></Grid>)
      }
    
      useEffect( () => {
        listRecipes()
      },[recipes])

  return (
    <Grid container spacing={2}>
        {renderRecipes()}
    </Grid>
  )
}

export default RecipesList