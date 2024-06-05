import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Partabout2() {
  return (
    <div>
        <Box sx={{marginTop:"10rem" ,marginLeft :"15%" ,marginRight:"15%"}}>
            <Box>
       <Typography variant='h4'sx={{marginBottom:"15px"}}>  Education </Typography>

       
       <Box sx={{display:"flex" ,marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> Lycée </Typography>
       <Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> Scientific Baccalaureate, Lycée Ali Ferrah, Berrouaghia.</Typography>
       </Box>
       <Box sx={{display:"flex",marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> Licence </Typography>
       <Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}>Systems engineering,University Of Medea Yahia Fares</Typography>
       </Box>
       <Box sx={{display:"flex",marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> Master  </Typography>
       
       <Typography variant='h6' sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}>: Ingénierie des systèmes et technologie de web , University Of Medea Yahia Fares</Typography>
       </Box>
       </Box>



       <Box sx={{marginTop:"50px"}}>

       <Typography variant='h4'sx={{marginBottom:"15px"}}>  My Skills </Typography>

       
       <Box sx={{display:"flex" ,marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> FrontEnd </Typography>
       <Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> Html, css, JavaScript, React Js , Bootstrap, Next Js </Typography>
       </Box>
       <Box sx={{display:"flex",marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> BackEnd </Typography>
       <Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> PHP , Node Js(express js), Flask</Typography>
       </Box>
       <Box sx={{display:"flex",marginBottom:"10px"}}>
       <Typography variant='h5' sx={{marginRight:"10%"}}> Database  </Typography>
       
       <Typography variant='h6' sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> MySQL,Mongo db</Typography>
       </Box>
       </Box>






       <Box sx={{marginTop:"50px"}}>

<Typography variant='h4'sx={{marginBottom:"15px"}}>  Experiences </Typography>


<Box sx={{display:"flex" ,marginBottom:"10px"}}>
<Typography variant='h5' sx={{marginRight:"10%"}}> Study and personal  </Typography>
<Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> personal web site and memory end of study 2020 - until now</Typography>
</Box>
<Box sx={{display:"flex",marginBottom:"10px"}}>
<Typography variant='h5' sx={{marginRight:"10%"}}> work </Typography>
<Typography variant='h6'sx={{bgcolor:"#1565c0",padding:"5px 6px" ,borderRadius:"15px"}}> WEB application for store management Judicial Council
of Djelfa. 2023</Typography>
</Box>
<Box sx={{display:"flex",marginBottom:"10px"}}>


<Typography variant='h6'> <strong>All these works are made using the techniques mentioned above and are available
in my GitHub.</strong></Typography>
</Box>
</Box>




        </Box>
      
    </div>
  )
}
