import Tab from "@mui/material/Tab"
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { AppBar, Button, Link, Menu, MenuItem, Toolbar } from "@mui/material";
import Image from "next/image";
import img1 from '../../pages/assets/images/portfolio1.png'
import img2 from '../../pages/assets/images/portfolio2.png'
import img3 from '../../pages/assets/images/portfolio3.png'
import { motion } from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import NavigationIcon from '@mui/icons-material/Navigation';
const linkStyles_in_menu = {
  color:'black' ,
  fontSize: 18 ,
  margin:'5px',
  textDecoration:'none',
  fontFamily:"Sous-titre",
  '&:hover': {
    textDecoration:'none',
    color :'var(--Dark_Charcoal)',
    
    
},

};
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
          
        
       <Tabs sx={{display: { lg: 'flex', md: 'flex', xs: 'none' }}} value={value} onChange={handleChange} centered>
        <Tab sx={{fontWeight:700, color:"white" ,fontFamily:"Sous-titre"}}label="Home" href="/" ></Tab>
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="About" href="/#section1" />
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="Projrcts" href="/projct"/>
        <Tab sx={{fontWeight:700, color:"white",fontFamily:"Sous-titre"}}label="contact" href="/#section2" />
        
      </Tabs>
      <Box sx={{ display: {md: 'none', lg: 'none' } }}>
              <Button  sx={{color:"var(--Bright_Gray)"}} id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <MenuIcon  fontSize="large"></MenuIcon>
              </Button>
            </Box>
    </Toolbar>
    </AppBar>)}
    <style >{`
          
      .divimg{
            
            display: flex;
             flex-direction: row;
          }
        
          
      
    
       
        
        
        
        
        
      `}</style>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          style: { display: 'flex', flexDirection: 'column', alignItems: 'center',padding:'5px' },
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href="/" sx={linkStyles_in_menu}>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/#section1" sx={linkStyles_in_menu}>About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/projct" sx={linkStyles_in_menu}>Projrcts</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href="/#section2" sx={linkStyles_in_menu}>contact</Link></MenuItem>
        

        
      </Menu>
      </Box>
    
  )
}
