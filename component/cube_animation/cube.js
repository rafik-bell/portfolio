import React from 'react';
import styles from './Loader.module.css';

const CubeLoader = () => {
  return (
    <div className={styles.cubeLoader}>
      <div className={styles.cubeTop}></div>
      <div className={styles.cubeWrapper}>
        <span style={{ '--i': 0 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 1 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 2 }} className={styles.cubeSpan}></span>
        <span style={{ '--i': 3 }} className={styles.cubeSpan}></span>
      </div>
    </div>
  );
};

export default CubeLoader;
