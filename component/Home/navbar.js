import Tab from "@mui/material/Tab"
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { AppBar, Link, Toolbar } from "@mui/material";
import Image from "next/image";

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
    <Box    sx={{ pt: '0.5px', bgcolor: 'transparent' }}>
      {/* Content for Box */}
    </Box>
  ) : (
    <AppBar sx={{ bgcolor: 'transparent' }}>
     

      
        <Toolbar  sx={{position: 'sticky', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',padding:"20px 0px" ,display:"flex",justifyContent:"space-around"}}>
          <div className="divimg">
          <Image src="/logo.png" width="120" height="50" sx={{marginBottom:'30px '}}></Image>
          </div>
          
        
       <Tabs  value={value} onChange={handleChange} centered>
        <Tab sx={{fontWeight:700, color:"white"}}label="Home" href="/" ></Tab>
        <Tab sx={{fontWeight:700, color:"white"}}label="About" href="/about" />
        <Tab sx={{fontWeight:700, color:"white"}}label="Projrcts" href="/projct"/>
        <Tab sx={{fontWeight:700, color:"white"}}label="contact" href="/contact" />
        
      </Tabs>
    </Toolbar>
    </AppBar>)}
    <style >{`
          
        @media (max-width: 600px) {
          .divimg{
            display: none;

          }
        
      
      
      }
       
       
        
        
        
        
        
      `}</style>
      
    
      </Box>
    
  )
}
