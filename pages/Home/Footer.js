import React from 'react'
import { Box, Button, Typography } from '@mui/material'
export default function Footer() {
  return (
    <div>
        <Box sx={{width:"100%" ,bgcolor:"#263238"}}>
            <Box sx={{marginTop:"10rem" ,marginLeft :"15%" ,marginRight:"15%",display:"flex" ,color:"lightgray",padding:"25px 0px"}}>
        <Box sx={{width:"25%"}}>
        <Typography variant='h5'><strong>Rafik Bellarbi</strong></Typography>

        <Typography>*A full stack web developer from Berrouaghia, Medea. I always make websites that have unique designs and also has a good performance rate.</Typography>

        </Box>
        <Box sx={{width:"25%"}}>
        <Typography variant='h5'><strong>Important Links</strong></Typography>

        <Typography>* Home</Typography>
        <Typography>* About</Typography>
        <Typography>* Projects</Typography>
        <Typography>* Contact</Typography>

        </Box>
        <Box sx={{width:"25%"}}>
        <Typography variant='h5'><strong>Contact Info</strong></Typography>

        <Typography>* +213 675925960</Typography>
        <Typography>* rafikbella0@gmail.com</Typography>
        <Typography>* rafikbellarbi3@gmail.com</Typography>
        <Typography>* Cite Djedi AEK ,Berrouaghia,Medea ,Algeria </Typography>

        </Box>
        <Box sx={{width:"25%"}}>
        <Typography variant='h5'><strong>Social Links</strong></Typography>

        <Typography>* LinkedIn</Typography>
        <Typography>* GitHub</Typography>

        </Box>



        </Box>
        </Box>

      
    </div>
  )
}
