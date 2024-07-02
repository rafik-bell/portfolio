import { Box, Button, Container, Grid, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PlaceIcon from '@mui/icons-material/Place';

import React from 'react'
const boxstyle={
    justifyContent: 'center',
  display: 'flex', 

  
  
 

}
const boxstyle1={
    justifyContent: 'center',
    display: 'flex', 
    
    flexDirection:'column',
    mb:'20px'
 

}
const bottonstyle={
    color:'var(--Bright_Gray)',
    fontSize: 15,
    fontWeight: 600,
    width:'200px',
    
    bgcolor:'var(--black)', 
    '&:hover': {bgcolor:'var(--Bright_Gray)',color :'var(--black)',}, 

}
export default function Homepart5() {
 
  
  return (
    <Box  sx={{}}>
      <Paper elevation={3} sx={{mx:'10%'}}>
        <Box sx={{pt:"30px", pb:'20px'}}>
   <Typography  variant='h5' textAlign='center' color='var(--black)' fontFamily='Text'>how we can help you ?</Typography> 
   <Typography   textAlign='center' color='var(--vDBright_Gray)' fontFamily='Text'>CONTACT</Typography> 
   </Box> 
  <Grid  data-aos="fade-up" container spacing={3} >
       
  <Grid item xs={12} md={4} >
    <Box sx={{marginY:'15px'}}>
    <Box >
       <Typography   textAlign='center' color='var(--eminence)' sx={boxstyle} fontFamily='Text'><PlaceIcon style={{marginRight:'7px'}}/>Adresse</Typography>
       <Typography  fontSize={12} textAlign='center' color='var(--vDBright_Gray)'  fontFamily='Text'>Cité Djedi AEK  , Berrouaghia , Medea , Algerie</Typography>
       </Box>
    </Box>
  </Grid>
  <Grid item xs={12} md={4} >
    <Box sx={{marginY:'15px'}}>
    <Box >
       <Typography fontFamily='Text' textAlign='center' color='var(--eminence)' sx={boxstyle}  ><PhoneAndroidIcon style={{marginRight:'7px'}}/>Téléphone</Typography>
       <Typography  fontSize={15}mt={1} textAlign='center' color='var(--vDBright_Gray)'  fontFamily='Text'>+213 774 87 35 13,+213 675 92 59 60</Typography>
       
       </Box>
    </Box>
  </Grid>
  <Grid item xs={12} md={4} >
    <Box sx={{marginY:'15px'}}>
    <Box >
       <Typography  textAlign='center'  color='var(--eminence)'sx={boxstyle} fontFamily='Text'><EmailIcon style={{marginRight:'7px'}}/>Email</Typography>
       <Typography  fontSize={15}mt={1} textAlign='center' color='var(--vDBright_Gray)'  fontFamily='Text'>bellarbi.rafik7@gmail.com</Typography>
       </Box>
    </Box>
  </Grid>
 
 
</Grid>



</Paper>

  


    </Box>
      
    
  )
}
