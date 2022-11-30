import React from 'react'
import RecipesList from '../components/RecipesList';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
        <Header/>
        <RecipesList />
    </div>
  )
}

export default HomePage