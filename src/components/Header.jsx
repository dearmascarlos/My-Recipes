import React from 'react'
import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom'

function Header() {
  return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>My Recipes</Typography>
                <Button color="inherit">Login</Button>
                <Link to="/register"><Button color="inherit">Register</Button></Link>
            </Toolbar>
        </AppBar>
  )
}

export default Header