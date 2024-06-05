import React from 'react'
import Navbar from '../component/Home/navbar'
import Footer from '../component/Home/Footer'
import Partabout1 from '../component/About/Partabout1'
import Partabout2 from '../component/About/Partabout2'
import Parthome4 from '../component/Home/Parthome4'
import imag1 from "./assets/images/bgglobal.png"
import { Box } from '@mui/material'
export default function About() {
  return (
    <>
                 <Box  sx={{ color:'rgb(244, 241, 241)',backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>

      <Partabout1></Partabout1>
      <Partabout2></Partabout2>
      <Parthome4 ></Parthome4>

</Box>
      
    </>
  )
}
