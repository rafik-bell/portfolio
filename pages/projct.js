import React from 'react'
import Navbar from '../component/Home/navbar'
import Footer from '../component/Home/Footer'
import imag1 from "./assets/images/bgglobal.png"

import Partprojct1 from '../component/Projct/Partprojct1'
import Partprojct2 from '../component/Projct/Partprojct2'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

export default function projct() {
  return (
    <>
                        <Box  component={motion.div}
           transition={{
            duration: 0.2,
            
          }}
          initial={{ x:'100vw'}}
              animate={{
                x:0,
              }}  sx={{ color:'rgb(244, 241, 241)',backgroundImage: `url(${imag1.src})`,backgroundSize: 'cover',backgroundPosition: 'center',minHeight:'100vh' }}>

        <Partprojct1></Partprojct1>
        <Partprojct2></Partprojct2>
        </Box>
      
    </>
  )
}
