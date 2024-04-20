import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import art1 from '../../assets/art1.jpg';
import art2 from '../../assets/art2.jpg';
import art3 from '../../assets/art3.jpg';
import styles from "./Slider.module.scss";

const Slider: React.FC = () => {
    const passportImages = [
      { id: 1, url: art1 },
      { id: 2, url: art2 },
      { id: 3, url: art3 },
    ];
  
    return (
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {passportImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.containerImageSlider}>
              <img
                src={image.url}
                alt={`Passport ${image.id}`}
                className={styles.imageSlider}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default Slider;