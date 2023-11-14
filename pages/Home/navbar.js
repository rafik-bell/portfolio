import Tab from "@mui/material/Tab"
import React from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { Link } from "@mui/material";
import Image from "next/image";

export default function Navbar() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 ,backgroundColor:"white"}}>
      
        <Box sx={{marginBottom:'30px ' ,backgroundColor:" rgb(231, 230, 230)",padding:"20px 0px" ,display:"flex",justifyContent:"space-around"}}>
          <div className="divimg">
          <Image src="/logo.png" width="120" height="50" sx={{marginBottom:'30px '}}></Image>
          </div>
          
        
       <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" href="/" ></Tab>
        <Tab label="About" href="/about" />
        <Tab label="Projrcts" href="/projct"/>
        <Tab label="contact" href="/contact" />
        
      </Tabs>
    </Box>
    
    <style >{`
          
        @media (max-width: 600px) {
          .divimg{
            display: none;

          }
        
      
      
      }
       
       
        
        
        
        
        
      `}</style>
      
    </div>
  )
}
