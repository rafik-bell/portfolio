import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import styles from './VideoContainer.module.css';

const VideoContainer = () => {
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const video = videoRef.current;

    const updateVideoTime = (progress) => {
      if (video.readyState) {
        video.currentTime = video.duration * progress;
      }
    };

    scrollYProgress.onChange(updateVideoTime);
    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);

  return (
    <div className={styles['video-container']}>
      <video style={{
    
    width: "100%"}}
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop
        src="https://cdn.pixabay.com/video/2023/10/31/187225-879649787_large.mp4"
      ></video>
    </div>
  );
};

export default VideoContainer;
