
import { Box, Button, Typography,Grid } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';



const img ={width:'550px',height:'400px' ,borderRadius:"10px"}
const img2 ={transform :' rotate(-90deg)',marginLeft :"30px"}
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}


export default function Herosection() {
  return (
    <Box  sx={{width:"100%",height:'100%',alignItems:'center' ,justifyContent:'center',display:'flex',flexDirection:"column" ,margin:"5rem 1rem" }}>
      <Box sx={{display:"flex"}}>
      <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      <Box sx={{margin:"10px 50px"}}>
      <Typography sx={{marginBottom:'-2rem' ,zIndex:'2'}} >
            <Typography fontFamily={"serif"} variant='h4' sx={{textAlign:'center'}}>Hello, This is</Typography>
            <Typography  fontFamily={"serif"} variant='h1'sx={{}}>Rafik Bellarbi</Typography>
          </Typography >
          <Box sx={{alignItems:'center' ,textAlign:'center',margin:'5rem 3.5rem'}}>
            <Typography sx={{width:'400px',marginBottom:"10px"}}> I am working as a full stack web developer for 2
              years. I love to design and make new web experiences for the
              people.</Typography>
            <Button variant="contained"  href='/projct' sx={{height:'3rem',width:'11rem',color:'white'}}>See my works</Button>
          </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>

        <Box sx={{margin:"10px 40px" }}>
          <Box  sx={{width:"70",height:'50%' ,border:"3px solid white" ,borderRadius:"10px"}} >
            <img src="/photo2.jpg" style={img} alt="" />
          </Box>
          
          </Box>
          </Grid>
          </Grid>
          </Box>


          <Box sx={{fontSize:'1rem',transform :'translateY(-70px) rotate(90deg)',letterSpacing:"0.7rem",textTransform:"uppercase",marginRight:"95%",display:'flex',flexDirection:'row',marginTop:"-100px"}}>
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
                <a style={a}>
                <PhoneIcon></PhoneIcon>
                  0675925960
                  
                </a>
            
          </Box>
          </Box>






    </Box>
      
         
      
    
  )
}
