import Head from 'next/head'
import Image from 'next/image'
import { Box } from '@mui/material'
import Navbar from '../../component/Home/navbar';
import Footer from '../../component/Home/Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <Box>
       {(router.pathname !== '/Login' && router.pathname !== '/Register' )&&(
       <Navbar></Navbar>
       )}
        {children}
        {(router.pathname !== '/Login' && router.pathname !== '/Register' )&&(
      <Footer></Footer>
      )}
    </Box>
 
  )
}