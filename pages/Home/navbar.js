import Tab from "@mui/material/Tab"
import React from "react";
import Tabs from "@mui/material/Tabs"
import Box from "@mui/material/node/Box/Box";
import { Link } from "@mui/material";

export default function Navbar() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      
        <Box sx={{ margin:'30px auto'}}>
        
       <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" href="/" ></Tab>
        <Tab label="About" href="/about" />
        <Tab label="Projrcts" href="/projct"/>
        <Tab label="contact" href="/contact" />
        
      </Tabs>
    </Box>
      
    </div>
  )
}
