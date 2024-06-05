import React from 'react'
import { Box, Button, Typography,Grid } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import TvIcon from '@mui/icons-material/Tv';
import DataObjectIcon from '@mui/icons-material/DataObject';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';



const img ={width:'700px',height:'500px'}
const img2 ={transform :' rotate(-90deg)',marginLeft :"30px"}
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}

export default function Parthome3() {
  return (
    <>
   <Box sx={{marginTop:"20rem" ,marginLeft :"10%" ,marginRight:"10%",textAlign:"center",color:'rgb(244, 241, 241)'}}>
    <Box>
        <Typography variant='h6'>What i will do for you </Typography>
        <Typography variant='h2'>Services</Typography>
    </Box>
    
     <Grid container spacing={3} align="center">
        
        <Grid item xs={12} sm={6} md={4} sx={{padding:0}} >
        <Box sx={{width:"70%" , padding: "40px 0"}}>
            <Box>
                <CodeIcon sx={{ width:"50px",height:"50px"}}></CodeIcon>
                <Typography variant='h5' sx={{fontWeight:600,marginBottom:"10px"}}>Backend developer</Typography>
            </Box>
            <Typography>PHP , Node Js (express js), Flask.</Typography>
            </Box>
        </Grid>
        
        
        <Grid item xs={12} sm={6} md={4} >
        <Box sx={{ padding: "40px 0",width:"70%"}}>
        <Box>
                <TvIcon sx={{ width:"50px",height:"50px"}}></TvIcon>
                <Typography variant='h5' sx={{fontWeight:600,marginBottom:"10px"}}>Frontend developer</Typography>
            </Box>
            <Typography>Html, css, JavaScript, React Js , Bootstrap, Next Js.</Typography>
            </Box>
        </Grid>
        
        
        <Grid item xs={12} sm={6} md={4}>
        <Box sx={{width:"70%",padding: "40px 0"}}>
        <Box>
                <DataObjectIcon sx={{ width:"50px",height:"50px"}}></DataObjectIcon>
                <Typography variant='h5'sx={{fontWeight:600,marginBottom:"10px"}}>Database developer</Typography>
            </Box>
            <Typography>MySQL, XML,Mongo db.</Typography>
            </Box>
        </Grid>
        
      </Grid>
     
      
   </Box>
  
   </>
  )
}
