import { Box ,Grid, Paper, Typography } from '@mui/material';
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
const img ={width:'250x',height:'150px' ,margin:"20px 0px",borderRadius:"20px"}


class Partprojct2 extends Component {
  state = [{
    name: "Portfolio Site",
    disc:"A portfolio website is a concise, online showcase of an individual's or professional's work, skills, and achievements.",
    img :"/rafik.jpg",
    url :"https://chat.openai.com/"
  }
  ,
  {
    name: "Covid-19 Site",
    disc:"A web site of Models deployment for COVID-19 detection using transfer learning",
    img :"/img2.png",
    url :""
  }
  ,
  {
    name: "Game of Thrones",
    disc:"A site for the characters of the Game of Thrones series, and you can read a summary of 5 episodes of it ",
    img :"/game.jpg",
    url :""
  }
  
  ,
  {
    name: "Store application",
    disc:" A WEB application for store management. ",
    img :"/cj.jpg",
    url :""
  }
  
  ,
  {
    name: "Login",
    disc:"A a model of login page . ",
    img :"/login.jpg",
    url :""
  }
  
  ,
  {
    name: "rafik1",
    disc:"bbbbbb",
    img :"/hero10.jpg",
    url :""
  }
  
  
]

  render() {
    const { items } = this.state;
    return (
      <div>
       <Box sx={{margin:"0% 16%"}}>
       <TextField
        label="Projct name"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      sx={{marginBottom:"40px"}}/>
       <Grid container spacing={2}>
       {this.state.map((item, index) => (

        
        
        <Grid item key={item.name} xs={12} sm={6} md={6} sx={{padding:0}} >
          <a href={item.url}>
          <Paper elevation={16}sx={{backgroundImage: 'url("/bgp1.jpg")',borderRadius:"20px"}}>

          <Box sx={{display:"flex"}}>
           
          <Box sx={{margin:"30px 0px 0px 15px"}}>
          <Typography fontWeight={500} sx={{margin:"0px 5px" ,color:"white" }}><strong> {item.name}</strong> </Typography>
          
          <Typography sx={{margin:"0px 5px",color:"lightgray"}} fontSize={10}>{item.disc}</Typography>

          </Box>
          <Box  sx={{margin:"10px 15px"}}>
          <img src={item.img} style={img} alt="" />
          </Box>



          </Box>
          </Paper>

          </a>

        </Grid>
        
))}

        </Grid>
       </Box>
      </div>
    );
  }
}

export default Partprojct2;