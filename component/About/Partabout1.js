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
        <Box sx={{display:"flex",margin:'0px 10%',pt:{lg:"15%",md:"15%",xs:"30%"}}}>
        <Grid container spacing={2}>
        
        <Grid item xs={12} sm={6} md={7} sx={{padding:0}} >
            <Box >
           <Typography variant='h5'  fontFamily="Sous-titre" >  Hi, I am Bellarbi Rafik </Typography>
           <Typography fontFamily="Sous-titre" variant='h4'sx={{marginBottom:"15px"}}>A full stack  Web developer</Typography> 
           <Typography  fontFamily="Text" variant='h6' textAlign="justify" sx={{marginBottom:"15px"}}>I am Rafik Bellarbi, a Full Stack Web Developer with 2+ years of experience in designing, developing, and maintaining web applications. Skilled in JavaScript, React ,Next, Node.js, Express.js, Mongodb and SQL. Proven track record of delivering high-quality software solutions and optimizing performance. Strong problem-solving abilities and collaborative team player. Always eager to learn new technologies and enhance my skills.
           </Typography> 


           <Button variant="contained" href='/cv'> Downlead CV</Button> 
            </Box>

            </Grid>
            <Grid item xs={12} sm={6} md={5} sx={{padding:0}} >
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

