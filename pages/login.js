import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function Login() {
    const paperStyle={padding :20,height:'50vh',width:450, margin:"200px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const text={margin:'10px 0'}
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>LOGIN</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' fullWidth required style={text}/>
            
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <FormControlLabel
                control={
                <Checkbox
                    name="checkedB"
                    color="primary"
                />
                }
                label="Remember me"
             />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            <Typography >
                 <Link href="#" >
                    Forgot password ?
            </Link>
            </Typography>
            <Typography > Do you have an account ?
                 <Link href="/sign_in" >
                    Sign Up 
            </Link>
            </Typography>
        </Paper>
    </Grid>
    )
  }