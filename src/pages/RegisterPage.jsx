import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { signup } from '../services/user.services';
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const register = () => {
        const user = {
            name,
            email,
            password
        }
        signup(user)
        navigate('/')
    }


  return (
    <Card>
        <CardContent>
            <TextField label="name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
            <TextField label="email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <TextField label="password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </CardContent>
        <CardActions>
            <Button onClick={() => register()} >Register</Button>
        </CardActions>
    </Card>
  )
}

export default RegisterPage