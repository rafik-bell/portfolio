import React from 'react'

import Partabout1 from '../component/About/Partabout1'
import Partabout2 from '../component/About/Partabout2'
import Parthome4 from '../component/Home/Parthome4'
import imag1 from "./assets/images/bgglobal1.png"
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <>
                 <Box   component={motion.div}
           transition={{
            duration: 0.2,
            
          }}
          initial={{ x:'100vw'}}
              animate={{
                x:0,
              }}sx={{ color:'rgb(244, 241, 241)',backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>

      <Partabout1></Partabout1>
      <Partabout2></Partabout2>
      <Parthome4 ></Parthome4>

</Box>
      
    </>
  )
}
