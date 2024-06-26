import React from 'react'

import Partcontact1 from '../component/Contact/Partcontact1'
import Partcontact2 from '../component/Contact/Partcontact2'
import { Box } from '@mui/material'
import imag1 from "./assets/images/bgglobal.png"
import { motion } from 'framer-motion'


export default function contact() {
  return (
    <Box  component={motion.div}
    transition={{
     duration: 0.2,
     
   }}
   initial={{ x:'100vw'}}
       animate={{
         x:0,
       }} sx={{ color:'rgb(244, 241, 241)',backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>


      <Partcontact1></Partcontact1>
      <Partcontact2></Partcontact2>



      
      
    </Box>
  )
}
