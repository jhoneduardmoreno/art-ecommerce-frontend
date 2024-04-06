import { useState, useEffect } from 'react';
import styles from './Advertisement.module.scss';

export const Advertisement = () => {

  const text1 = 'Conoce los proyectos de Ismara Dayana';
  const text2 = 'Conoce la nueva colección';

  const [text, setText] = useState(text1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start the fade
      setTimeout(() => {
        setText((currentText) =>
          currentText === text1
            ? text2
            : text1
        );
        setFade(false); // Reset fade state for the next cycle
      }, 500); // Change the text after 0.5 seconds
    }, 8000); // Total interval, adjust as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.advertisement}>
      <p className={`${fade ? styles.fade : ''}`}>{text}</p>
    </div>
  );
};
