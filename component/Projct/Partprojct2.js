import { Box ,Button,Card,CardActions,CardContent,CardMedia,Grid, Modal, Paper, Typography } from '@mui/material';
import React, { Component, useState } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import Image from 'next/image';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs: "100%",md:"60%"},
  p:2
  ,borderRadius:"20px"
 
};
const img ={width:'250x',height:'150px' ,margin:"20px 0px",borderRadius:"20px"}
const animationfont ={
  hidden:{
    
   
  },
  visible:{
    
    
    transition:{
      duration: 2,
      staggerChildren:0.5

      
    }

  }
}
const animationfontChild ={
  hidden:{
    opacity:0,
    x:100

  },
  visible:{
    x:0,
    opacity:1,
    transition:{
      duration: 1,
     

      
    }
  }
}

export default function Partprojct2()   {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const [state, setState] = React.useState([{
    name: "Portfolio Site",
    disc:"A portfolio website is a concise, online showcase of an individual's or professional's work, skills, and achievements.",
    img :"/rafik1.jpg",
    url :"/",
    tech:["Next js","Mui","Rest api","Frame motion","AOS Animation"]
  }
  ,
   {
    name: "Météo",
    disc:"A meteo app provides real-time weather information and forecasts for specific locations.",
    img :"/meteo.jpg",
    url :"https://meteo-eight-zeta.vercel.app/",
    tech:["React js","Rest api","Mui"]
  },
  {
    name: "Online BMR Calculator",
    disc:" من خلال حاسبة حرق السعرات الحرارية، تستطيع معرفة عدد السعرات الذي تناولته خلال اليوم ضمن نظامك الغذائي، ادخل معطياتك واكتشف الان. ",
    img :"/bmr.jpg",
    url :"https://bmr-calculator-two.vercel.app/",
    tech:["React js","Rest api","Mui"]
  },
  
  {
    name: "Instagram react native app",
    disc:"Instagram react native app ,Show images and vidio of app in GitHub ",
    img :"/insta1.jpg",
    url :"https://github.com/rafik-bell/Instagram-app",
    tech:["React native"]
  }
  ,
  {
    name: "Game of Thrones",
    disc:"A site for the characters of the Game of Thrones series, and you can read a summary of 5 episodes of it ",
    img :"/game1.jpg",
    url :"http://sad-window.surge.sh/",
    tech:["React js","Rest api","Mui"]
  }
  
  ,
  {
    name: "Store application",
    disc:" A web application for store management is a digital platform that helps businesses efficiently handle tasks like inventory tracking, sales management, and customer interactions, streamlining store operations.. ",
    img :"/cj1.jpg",
    url :"",
    tech:["Html","Css","Php","Mysql"]
  }
  
  ,
  {
    name: "Login",
    disc:" A login page template is a pre-designed format for creating login interfaces in web or app development, simplifying the design process. ",
    img :"/login1.jpg",
    url :"https://rafik-bell.github.io/login_page/",
    tech:["Html","Bootsrap"]
  }
  
  ,
 
  
  
])


    
    return (
      <>
       <Box sx={{margin:"0% 10%"}}>
       <TextField
        label="Projct name"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      sx={{marginBottom:"40px"}}/>
       <Grid container spacing={10} component={motion.div} variants={animationfont} initial="hidden" animate="visible">
       {state.map((item, index) => (

        
        
        <Grid variants={animationfontChild} component={motion.div} item key={item.name} xs={12} sm={6} md={6} sx={{padding:0}} >
        <Paper  onClick={() => handleOpen(item)} component={motion.div} 
 whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} elevation={16}sx={{backgroundImage: `url(${item.img})`,borderRadius:"20px",minHeight:"300px",  backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',position:'relative', zIndex :1}}>

          <Box sx={{display:"flex"}}>
           
          
          <Box  sx={{margin:"2% 5%"}}>
         
          </Box>



          </Box>
          </Paper>
          <Box sx={{margin:"5% 5%"}}>
          <Typography fontFamily="Sous-titre"  variant='h5' textAlign="center" sx={{margin:"0px 5px"  }}><strong> {item.name}</strong> </Typography>
          
          

          </Box>

          

        </Grid>
        
        
        
))}


        </Grid>
        <Modal 
      data-aos="fade-down"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
       <>
            {selectedItem && (
              <>
              <Card sx={style}>
              <Grid container spacing={2}>
  <Grid item xs={12} md={6}>
  <Image  width={400} height={200}src={selectedItem.img}></Image>
  </Grid>
  <Grid item xs={12}  md={6}>
       <Typography gutterBottom fontFamily="Sous-titre"  variant="h6" component="div">
        Technology Used :
        </Typography>
        {selectedItem.tech.map((item, index) => (
        <Typography fontFamily="Text" key={index}   component="div">
        
        - {item}
  
        </Typography>
        ))}
  </Grid>
  </Grid>
    
      <CardContent>
        <Typography fontFamily="Titre" gutterBottom variant="h5" component="div">
        {selectedItem.name}
        </Typography>
        <Typography  fontFamily="Text"variant="body2" color="text.secondary">
        {selectedItem.disc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={selectedItem.url}>Visit Website</Button>
      </CardActions>
    </Card>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                 
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  
                </Typography>
              </>
            )}
         </>
      </Modal>
       </Box>
       <style >{`
          .img{ width:100%;
           height:100%; 
           border-radius: 10px;
           border: 3px solid white;}
           

        @media (max-width: 1000px) {
          .img{
            width: 100%;
            height:80%;
  
          }
        }
        @media (max-width: 400px) {
        .img{
          width: 100%;
          height:80%;

        }
      
      
      }
       
       
        
        
        
        
        
      `}</style>
      </>
    );
  }


