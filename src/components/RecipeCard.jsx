import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function RecipeCard({data}) {
  return (
    <Card sx={{ width: 200 }}>
        <CardContent>
                {data.name}
                <br></br>
                {data.time}
        </CardContent>
    </Card>
  )
}

export default RecipeCard