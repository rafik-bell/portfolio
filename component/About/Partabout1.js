import { Box, Typography ,Grid, Button} from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';




const img2 ={transform :' rotate(-90deg)',marginLeft :"30px" }
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}


const img ={width:'450px',height:'550px'}

export default function Partabout1() {
  return (
    <div>
        <Box sx={{display:"flex",marginLeft :"15%" ,marginRight:"15%",pt:{lg:"15%",md:"15%",xs:"30%"}}}>
        <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} md={6} sx={{padding:0}} >
            <Box >
           <Typography variant='h5' >  Hi, I am Bellarbi Rafik </Typography>
           <Typography variant='h4'sx={{marginBottom:"15px"}}>A full stack  Web developer</Typography> 
           <Typography variant='h6' sx={{marginBottom:"15px"}}>Degree in WEB systems and technologies engineering, Full stack developer passionate about the maintenance of WEB applications (front and back end, database) and artificial intelligence, A good personal experience in this field with Projects and mini Projects mentioned at the bottom of the CV.</Typography> 
           <Typography variant='h6'sx={{marginBottom:"15px"}}> I started coding bfore 4 year. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</Typography> 
           <Typography variant='h6' sx={{marginBottom:"15px"}}> My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</Typography>


           <Button variant="contained" href='/cv'> Downlead CV</Button> 
            </Box>

            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{padding:0}} >
            <Box>
            <img src="/photo4.jpg" className='img' alt="" />

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

            
            
                <a style={a}>
                  <LinkedInIcon></LinkedInIcon>
                  
                  likidin

                </a>
              
              
                <a style={a}>
                <GitHubIcon></GitHubIcon>
                  GitHub
                  
                </a>
                <a style={a}>
                <PhoneIcon></PhoneIcon>
                  0675925960
                  
                </a>
            
          </Box>
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
            height:400px;
  
          }
        }
        @media (max-width: 400px) {
        .img{
          width: 100%;
          height:400px;

        }
      
      
      }
       
       
        
        
        
        
        
      `}</style>
      
    </div>
  )
}

