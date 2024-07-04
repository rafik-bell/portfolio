import React from 'react'
import { Box, Button, Typography ,Grid, Container } from '@mui/material'

import imag from "../../pages/assets/images/person.png"

import Image from 'next/image';




const img2 ={transform :' rotate(-90deg)',marginLeft :"30px"}
const img ={width:'300px',height:'380px'}
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}

export default function Parthome2() {
  
  return (
    <>
   

   <Container>
    <Grid  container spacing={2}>
    <Grid  item xs={12} md={6}>
      <Box  sx={{ marginY:{md:"10%",xs:"20%"},marginX:{md:"10%",xs:"10%"}, color:'rgb(244, 241, 241)'}}>
        <Typography fontFamily='Sous-titre' variant='h5' >Let me introduce myself</Typography>
        <Typography fontFamily='Titre' variant='h2'sx={{marginBottom:"20px"}}>About Me</Typography>
        <Typography textAlign="justify" fontFamily='Text' variant='h6'sx={{marginBottom:"20px"}}>I am a  website developer from Berrouaghia, Medea. I create professional websites. I love art and always try to show unique views to the audience through my design.</Typography>
        <Button variant='contained' href="/projct" >Works</Button>
        <Button variant="outlined" href="/about" sx={{color:"lightgray",border:"3px solid white" ,marginLeft:"20px"}}>Reas More</Button>
        


      </Box>
      </Grid>
      <Grid item sx={{mt:"5%"}} xs={12} md={6} className="centered-image-container">
      
      

      <Image data-aos="fade-down" src={imag} height="490" width="495" alt="" />
        
     
      
      
        
      
      </Grid> 
      </Grid>
      

      </Container>
    
    
    <style >{`
    .centered-image-container {
      display: flex;
      
      align-items: center;
    }
          .img{ max-width: 70%;
            max-height: 85%; 
           border-radius: 10px;
           border: 1px solid white;
           }
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
    </>
  )
}
