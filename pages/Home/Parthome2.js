import React from 'react'
import { Box, Button, Typography ,Grid } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const img2 ={transform :' rotate(-90deg)',marginLeft :"30px"}
const img ={width:'300px',height:'380px'}
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}

export default function Parthome2() {
  return (
    <div>
    <Box  sx={{marginTop:"17rem" ,marginLeft :"20%" ,marginRight:"20%", display:"flex"}}>
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box sx={{width:"100%", marginTop:"50px"}}>
        <Typography variant='h5' >Let me introduce myself</Typography>
        <Typography variant='h2'sx={{marginBottom:"20px"}}>About Me</Typography>
        <Typography variant='h6'sx={{marginBottom:"20px"}}>I am a  website developer from Berrouaghia, Medea. I create professional websites. I love art and always try to show unique views to the audience through my design.</Typography>
        <Button variant='contained' href="/projct" >Works</Button>
        <Button variant="outlined" href="/about" sx={{color:"lightgray",border:"3px solid white" ,marginLeft:"20px"}}>Reas More</Button>
        


      </Box>
      </Grid>
      <Grid item xs={12} md={6}>
      <Box sx={{marginLeft:"150px",border:"3px solid white",width:'305px',height:'385px'}}>
      <img src="/photo4.jpg" style={img} alt="" />
        
        
        
        
      </Box> 
      </Grid> 
      </Grid>
      <Box sx={{fontSize:'1rem',transform :'translateY(-70px) rotate(90deg)',letterSpacing:"0.7rem",textTransform:"uppercase",marginLeft:"60%",display:'flex',flexDirection:'row',marginTop:"200px",position:"absolute"}}>
          <Box sx={{display:'flex',flexDirection:'row',marginRight:'30px'}}>
          <p>Follow</p>
              <img src="/scroll-down-arrow.svg" alt="icon" style={img2} />
          </Box>
          <Box sx={{alignItems:"center",justifyContent:'center',display:'flex' }}>

            
            
          <a style={a} href='https://www.linkedin.com/in/rafik-bellarbi'>
                  <LinkedInIcon></LinkedInIcon>
                  
                  likidin

                </a>
              
              
                <a style={a} href='https://github.com/rafik-bell'>
                <GitHubIcon></GitHubIcon>
                  GitHub
                  
                </a>
            
          </Box>
          </Box>

    </Box>
    </div>
  )
}
