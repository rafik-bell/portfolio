import Tab from "@mui/material/Tab"
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { AppBar, Link, Toolbar } from "@mui/material";
import Image from "next/image";
import img1 from '../../pages/assets/images/portfolio1.png'
import img2 from '../../pages/assets/images/portfolio2.png'
import img3 from '../../pages/assets/images/portfolio3.png'
import { motion } from "framer-motion";
export default function Navbar() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [scrollDirection, setScrollDirection] = useState('none');
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const [anchorEl1, setAnchorEl1] = useState(null);
 

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };


  const handleClose1 = () => {
    setAnchorEl1(null);
    
  };
  return (
    <Box sx={{ flexGrow: 1 }}>

    {scrollDirection ==='down' ? (
    <Box    sx={{ pt: '0.5px', bgcolor: '#1769aa' }}>
      {/* Content for Box */}
    </Box>
  ) : (
    <AppBar sx={{  bgcolor:prevScrollY? 'black' : 'transparent'  }}>
     

      
        <Toolbar  sx={{position: 'sticky', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:"20px 0px" ,display:"flex",justifyContent:"space-around"}}>
          <div className="divimg">
          <Image src={img1} width="100" height="60" sx={{}}></Image>
          <motion.div style={{margin:"0px 5px "}}
  component={motion.div}

transition={{
  
  duration: 7,
 
}}

    animate={{
      
      scale: [1, 0.7, 1.1, 0.7, 1],
      rotate: [0, 90, 180, 270, 360],
      
    }}
  >
    <Image  src={img3} width="25" height="60" sx={{}}></Image>
    </motion.div>
    <Image src={img2} width="50" height="60" sx={{}}></Image>
          </div>
          
        
       <Tabs  value={value} onChange={handleChange} centered>
        <Tab sx={{fontWeight:700, color:"white" ,fontFamily:"Sous-titre"}}label="Home" href="/" ></Tab>
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="About" href="/#section1" />
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="Projrcts" href="/projct"/>
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="contact" href="/#section2" />
        
      </Tabs>
    </Toolbar>
    </AppBar>)}
    <style >{`
          
      .divimg{
            
            display: flex;
             flex-direction: row;
          }
        
          
        @media (max-width: 600px) {
          .divimg{
            display: none;
            
          }
    }
       
        
        
        
        
        
      `}</style>
      
    
      </Box>
    
  )
}
