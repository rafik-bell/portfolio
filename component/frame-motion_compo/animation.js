
import { motion } from "framer-motion"
import { Box, Button, Typography ,Grid, Container } from '@mui/material'

export const MyComponent = () => (
  <Box
  component={motion.div}
style={{backgroundColor:'black',height:'200px',width:'200px'}}
transition={{
  ease: "linear",
  duration: 10,
  x: { duration: 1 }
}}
initial={{ x:100}}
    animate={{
      x:[200,100],
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  ></Box>
) 