import { Box, Slide } from '@mui/material';
import React, { useState } from 'react';
import art1 from '../../assets/art1.jpg';
import art2 from '../../assets/art2.jpg';
import art3 from '../../assets/art3.jpg';

interface PassportImage {
  id: number;
  url: string;
}

const passportImages: PassportImage[] = [
  { id: 1, url: art1 },
  { id: 2, url: art2 },
  { id: 3, url: art3 },
];

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '66.67%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {passportImages.map((image, index) => (
            <Slide
              key={image.id}
              direction={index < activeIndex ? 'right' : 'left'}
              in={index === activeIndex}
              mountOnEnter
              unmountOnExit
            >
              <img
                src={image.url}
                alt={`Passport ${image.id}`}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Slide>
          ))}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {passportImages.map((_, index) => (
            <div
              key={index}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === activeIndex ? '#3f51b5' : '#bdbdbd',
                margin: '0 8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease-in-out',
              }}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Slider;