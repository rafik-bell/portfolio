import '../styles/globals.css'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './Layout/layout';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
    });
  }, []);
  return <>
  <AnimatePresence mode='wait'>
   <Layout>
   <Component {...pageProps} />
   </Layout>
   </AnimatePresence>
    </>
}

export default MyApp
