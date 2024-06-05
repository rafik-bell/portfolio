import React from 'react';
import Navbar from './Home/navbar';
import Footer from './Home/Footer';

export default function Cv() {
  return (
    <div>
      <Navbar></Navbar>

      <iframe src='/cv1.pdf' style={{ width: '100%', height: '700px' }}></iframe>

      <Footer></Footer>
    </div>
  );
}