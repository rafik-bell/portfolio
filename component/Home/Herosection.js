
import { Box, Button, Typography,Grid, Paper, Hidden } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import imag1 from "../../pages/assets/images/bj.png"
import { motion } from 'framer-motion';


const animationfont ={
  hidden:{
    x:500,
   
  },
  visible:{
    x:0,
    
    transition:{
      duration: 2,
      staggerChildren:0.5

      
    }

  }
}
const animationfontChild ={
  hidden:{
    opacity:0


  },
  visible:{
    opacity:1,
    transition:{
      duration: 0.5,
     

      
    }
  }
}


const img ={width:'550px',height:'400px' ,borderRadius:"10px" }
const img2 ={transform :' rotate(-90deg)',marginLeft :"30px"}
const a ={alignItems:"center",justifyContent:'center',display:'flex' ,marginRight :"10px"}



export default function Herosection() {
  return (

    <Box  sx={{maxWidth:"100%" }}>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: '100%',pt:{lg:"10%",md:"15%",xs:"30%"} }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">

    <Grid item xs={12} md={6}>
      <Box  component={motion.div} variants={animationfont} initial="hidden" animate="visible"sx={{margin:"10px 50px" ,color:'rgb(244, 241, 241)'}}>
      
            <Typography variants={animationfontChild} component={motion.div}  fontFamily='Titre' variant='h4' sx={{textAlign:'center' }}>Hello, This is</Typography>
            <Typography variants={animationfontChild} component={motion.div}   fontFamily='Titre'variant='h2' sx={{ textAlign: 'center' }}>Rafik Bellarbi</Typography>
          
          
            <Typography variants={animationfontChild}component={motion.div}  sx={{width:'100%',marginBottom:"10px",fontWeight:600,textAlign:"justify",margin:'2rem 0rem',fontFamily:"Text"}}>I am Rafik Bellarbi, a Full Stack Web Developer with 2+ years of experience in designing, developing, and maintaining web applications. Skilled in JavaScript, React ,Next, Node.js, Express.js, Mongodb and SQL. Proven track record of delivering high-quality software solutions and optimizing performance. Strong problem-solving abilities and collaborative team player. Always eager to learn new technologies and enhance my skills.
              </Typography>
              <Box sx={{textAlign:'center',margin:'5rem 3.5rem'}}>
            <Button component={motion.div} whileHover={{ scale: [1, 1.3,1]  }} variant="contained"  href='/projct' sx={{height:'3rem',width:'11rem',color:'white'}}>See my works</Button>
          </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>

          <Box className="imageBox" sx={{ margin: '10px 40px' }}>
      <Paper data-aos="fade-down" elevation={12} align="center" sx={{ position: 'relative', width: '100%', borderRadius: '20px' }}>
        <Image src="/pht1.jpg" height="450" width="650" alt="" style={{borderRadius: '20px'}}/>
        <div className="overlay">
          <a  href="https://www.facebook.com/profile.php?id=100007353198005&mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize="large" ></FacebookIcon>
          </a>
          <a href="https://www.instagram.com/rafik_bell/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize="large" ></InstagramIcon>
          </a>
          <a href="https://www.linkedin.com/in/rafik-bellarbi-495470221/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" ></LinkedInIcon>
          </a>
        </div>
      </Paper>
    </Box>
          
          </Grid>
          </Grid>
          </Box>


          <Box sx={{ color:'rgb(244, 241, 241)',fontSize:'1rem',transform :'translateY(-70px) rotate(90deg)',letterSpacing:"0.7rem",textTransform:"uppercase",marginRight:"95%",display:'flex',flexDirection:'row',marginTop:"-100px"}}>
          <Box sx={{display:'flex',flexDirection:'row',marginRight:'30px'}}>
          <p>Follow</p>
              <img src="/scroll-down-arrow.svg" alt="icon" className='img2' />
          </Box>
          <Box sx={{alignItems:"center",justifyContent:'center',display:'flex' }}>

            
            
                <a style={a} href='https://www.linkedin.com/in/rafik-bellarbi-495470221/'>
                  <LinkedInIcon></LinkedInIcon>
                  
                  likidin

                </a>
              
              
                <a className='a' href='https://github.com/rafik-bell'>
                <GitHubIcon></GitHubIcon>
                  GitHub
                  
                </a>
                <a className='a'>
                <PhoneIcon></PhoneIcon>
                  0675925960
                  
                </a>
            
          </Box>
          </Box>



          <style >{`
          ///////////////////////image hover link css
          .imageBox {
            position: relative;
          }
          
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            opacity: 0;
            transition: opacity 0.3s;
          }
          
          .overlay a {
            color: white;
            text-decoration: none;
            font-weight: bold;
          }
          
          .imageBox:hover .overlay {
            opacity: 1;
          }
          ////////////////////
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
        @media (max-width: 600px) {
          .imagbox{
            display: none;

          }
        .img{
          width: 100%;
          height:400px;

        }
      
      
      }
       
       
        
        
        
        
        
      `}</style>


</Box> 
      
         
      
    
  )
}
