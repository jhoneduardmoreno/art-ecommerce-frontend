import { useState, useEffect } from 'react';
import styles from './Advertisement.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery, Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material';

export const Advertisement = () => {

  const isDesktop = useMediaQuery('(min-width:1024px)');
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
      <div>
        <a 
          href="https://www.instagram.com/arteconmara/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
      <p className={`${fade ? styles.fade : ''}`}>{text}</p>
    </div>
  );
};
