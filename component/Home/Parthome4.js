
import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Margin } from '@mui/icons-material'

export default function Parthome4() {
  return (
    <div>
        <Box sx={{paddingBottom:"10rem" ,marginTop:"5rem" ,marginLeft :"20%" ,marginRight:"20%",textAlign:"center"}}>
            <Box sx={{ bgcolor:"lightgray",width:"100%" ,borderRadius:"15px" }}>
                <Typography fontFamily={"inherit"} variant='h6'>Have a project in mind</Typography>
                <Typography fontFamily={"inherit"} variant='h3'>Let me help you</Typography>
                <Button variant='contained' href="/contact" sx={{height:"60px",width:"200px" ,margin:"20px 0px"}}>Contact Now</Button>

            </Box>



        </Box>
      
    </div>
  )
}
