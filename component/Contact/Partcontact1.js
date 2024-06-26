import React from 'react'
import { Box, Button, Typography ,Grid ,TextField} from '@mui/material'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function Partcontact1() {
  return (
    <div>
      <Box sx={{marginLeft :"15%" ,marginRight:"15%",pt:{lg:"15%",md:"15%",xs:"30%"}}}>
        <Box sx={{textAlign:"center" ,marginBottom:"5rem"}}>
     <Typography variant='h6'> get in touch</Typography>
     <Typography variant='h2'>Contact</Typography>
     </Box>
     
     <Grid container spacing={2}>
  <Grid item  xs={12} sm={6} md={6} sx={{padding:0}}>

      <Box sx={{ display:"flex",padding:"20px" ,marginBottom:"10px",bgcolor:"#1565c0" ,borderRadius:"20px",width:"80%"}}>
        <LocalPhoneIcon sx={{height:'40px',width:"40px",marginRight:"5%"}}></LocalPhoneIcon>
        <Typography variant='h5'>+213 675925960</Typography>
      </Box>
      <Box sx={{ display:"flex",padding:"20px",bgcolor:"#1565c0" ,marginBottom:"10px" ,borderRadius:"20px",width:"80%"}}>
      <MailOutlineIcon  sx={{height:'40px',width:"40px",marginRight:"5%"}}></MailOutlineIcon>
        <Typography variant='h5'>rafikbellarbi3 @gmail. com</Typography>
      </Box>
      <Box  sx={{ display:"flex",padding:"20px",bgcolor:"#1565c0" ,borderRadius:"20px",width:"80%"}}>
        <LocationOnIcon  sx={{height:'40px',width:"40px",marginRight:"5%"}}></LocationOnIcon>
        <Typography variant='h5' sx={{width:'50%'}}>Berrouaghia ,Medea</Typography>
      </Box>
      </Grid>
      <Grid item  xs={12} sm={6} md={6} sx={{padding:0}}>


      <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{width:"100%" ,marginBottom:'20px'}}/>
      <TextField id="outlined-basic" label="Your Email" variant="outlined" sx={{width:"100%",marginBottom:'20px'}}/>
      <TextField id="outlined-basic" label="Your message" variant="outlined" sx={{width:"100%",marginBottom:'20px'}}/>
      <Button variant='contained'>Send Your Message</Button>






      </Grid>

      </Grid>




      </Box>
      
    </div>
  )
}
