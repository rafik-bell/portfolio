import React from "react";
import Navbar from "./Home/navbar";
import Herosection from "./Home/Herosection";
import Parthome2 from "./Home/Parthome2";
import Parthome3 from "./Home/Parthome3";
import Parthome4 from "./Home/Parthome4";
import Footer from "./Home/Footer";


export default function index() {
  
  return (
    <div >
      <Navbar  />
      <Herosection></Herosection>
      <Parthome2></Parthome2>
      <Parthome3></Parthome3>
      <Parthome4></Parthome4>
      <Footer></Footer>

       
    </div>
  )
}
