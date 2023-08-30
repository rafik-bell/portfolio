import React from 'react'
import Navbar from './Home/navbar'
import Footer from './Home/Footer'
import Partprojct1 from './Projct/Partprojct1'
import Partprojct2 from './Projct/Partprojct2'

export default function projct() {
  return (
    <div>
        <Navbar></Navbar>
        <Partprojct1></Partprojct1>
        <Partprojct2></Partprojct2>
        
        <Footer></Footer>
      
    </div>
  )
}
