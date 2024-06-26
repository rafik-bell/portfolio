import React from "react";
import Herosection from "../component/Home/Herosection";
import Parthome2 from "../component/Home/Parthome2";
import Parthome3 from "../component/Home/Parthome3";
import Parthome4 from "../component/Home/Parthome4";
import imag1 from "./assets/images/bgglobal.png"
import { Box } from "@mui/material";
import { motion } from "framer-motion"
import VideoContainer from "../component/videoComponent/VideoContainer";


export default function index() {
  
  return (
    <>
           <Box 
           component={motion.div}
           transition={{
            duration: 0.2,
            
          }}
          initial={{ x:'100vw'}}
              animate={{
                x:0,
              }}
           sx={{backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>
      <Herosection></Herosection>
      
      <Parthome2></Parthome2>
      <Parthome3></Parthome3>
      <Parthome4></Parthome4>
      
      </Box>

       
    </>
  )
}
