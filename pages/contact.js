import React from 'react'

import Partcontact1 from '../component/Contact/Partcontact1'
import Partcontact2 from '../component/Contact/Partcontact2'
import { Box } from '@mui/material'
import imag1 from "./assets/images/bgglobal.png"


export default function contact() {
  return (
    <Box  sx={{ color:'rgb(244, 241, 241)',backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>


      <Partcontact1></Partcontact1>
      <Partcontact2></Partcontact2>



      
      
    </Box>
  )
}
