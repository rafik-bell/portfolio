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
    <Box  sx={{marginTop:"15%" ,marginLeft :"20%" ,marginRight:"20%", display:"flex"}}>
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
      <Box  align="center" sx={{marginLeft:"0%",width:'100%',height:'100%'}}>
      <img src="/photo4.jpg" className='img' alt="" />
        
        
        
        
      </Box> 
      </Grid> 
      </Grid>
      

    </Box>
    
    <style >{`
          .img{ width:80%;
           height:80%; 
           border-radius: 10px;
           border: 3px solid white;}
           .img2{
            transform: rotate(-90deg);
            margin-left: 30px;

           }
           .a {
            align-items: center;
            justify-content: center;
            display: flex;
            margin-right: 10px;
          }
    

        @media (max-width: 1000px) {
          .img{
            width: 100%;
            height:100%;
  
          }
        }
        @media (max-width: 400px) {
        .img{
          width: 100%;
          height:100%;

        }
      
      
      }
       
       
        
        
        
        
        
      `}</style>
    </div>
  )
}
