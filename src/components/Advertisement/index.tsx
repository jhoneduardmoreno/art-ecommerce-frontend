import { useState, useEffect } from 'react';
import styles from './Advertisement.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from '@mui/material';

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

  const classNameAdvertisement = isDesktop ? `${styles.advertisement} ${styles.advertisementDesktop}` : styles.advertisement;

  return (
    <div className={classNameAdvertisement}>
      {isDesktop &&
        <div className={styles.iconContainer}>
          <a 
            href="https://www.instagram.com/arteconmara/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" className={styles.iconsColor} />
          </a>
          <a 
            href="https://www.tiktok.com/@tuNombreDeUsuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} size="2x" className={styles.iconsColor} />
          </a>
        </div>
      }
      <div className={styles.textContainer}>
        <p className={`${styles.text} ${fade ? styles.fade : ''}`}>{text}</p>
      </div>
    </div>
  );
};
