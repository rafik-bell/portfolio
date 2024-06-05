import '../styles/globals.css'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from './Layout/layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);
  return <>
   <Layout>
   <Component {...pageProps} />
   </Layout>
    </>
}

export default MyApp
