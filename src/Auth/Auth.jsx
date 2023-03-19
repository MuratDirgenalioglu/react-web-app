import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import "./Auth.css"

function Auth() {
    const signIn = () => {
        let username = document.getElementById('username').value
        let pass = document.getElementById('password').value
        if (username === 'muratd' && pass === '1234') {
            console.log('login')
        }
        else {
            console.log('yanlıs pass or username')
        }
    }
    return (
        <div className='body'>
            <div className='card'>
                <Typography component="h1" variant="h4" align="center" color="primary" sx={{ mt: 5, mb: 2 }}>
                    Sign in
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 5, mb: 2 }}
                    onClick={signIn}
                >
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Auth
