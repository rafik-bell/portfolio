import React from 'react';
import styles from './Loader.module.css';
import { Box } from '@mui/material';

const CubeLoader = () => {
  return (
    <Box sx={{opacity:"60%"}}>
    <div className={styles.cubeLoader}>
      <div className={styles.cubeTop}></div>
      <div className={styles.cubeWrapper}>
        <span style={{ '--i': 0 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 1 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 2 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 3 }} className={styles.cubeSpan}></span>
      </div>
    </div>
    </Box>
  );
};

export default CubeLoader;
