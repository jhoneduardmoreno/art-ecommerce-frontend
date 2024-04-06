import { useState, useEffect } from 'react';
import styles from './Advertisement.module.scss';

export const Advertisement = () => {
  const [text, setText] = useState('Conoce los proyectos de Ismara Dayana');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start the fade
      setTimeout(() => {
        setText((currentText) =>
          currentText === 'Conoce los proyectos de Ismara Dayana'
            ? 'Conoce la nueva colección'
            : 'Conoce los proyectos de Ismara Dayana'
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
