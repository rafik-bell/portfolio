import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
export default function Sign_up() {
    const paperStyle={padding :20,height:'80vh',width:450, margin:"95px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const text={margin:'10px 0'}
    return (
        <Grid>
        <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Register</h2>
            </Grid>
            
            <TextField label='name' placeholder='Enter name' fullWidth required style={text}/>
            <TextField label='phone' placeholder='Enter phone' fullWidth required style={text}/>
            <TextField label='Email' placeholder='Enter email' fullWidth required style={text}/>
            <TextField label='Username' placeholder='Enter username' fullWidth required style={text}/>
            <TextField label='password' placeholder='Enter password' fullWidth required style={text}/>
            
            <TextField label='Confirm password' placeholder='Enter Confirm password' type='password' fullWidth required/>
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
                 <Link href="/login" >
                 Back to Login
            </Link>
            </Typography>
        </Paper>
    </Grid>
    )
  }