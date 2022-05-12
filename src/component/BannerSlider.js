import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerSlider = () => {
  const anniversaryList = [
    {
      name: '어린이날',
      url: 'https://www.instagram.com/explore/tags/어린이날',
    },
    {
      name: '스승의날',
      url: 'https://www.instagram.com/explore/tags/스승의날',
    },
    {
      name: '크리스마스',
      url: 'https://www.instagram.com/explore/tags/크리스마스',
    },
    {
      name: '어버이날',
      url: 'https://www.instagram.com/explore/tags/어버이날',
    },
    {
      name: '발렌타인데이',
      url: 'https://www.instagram.com/explore/tags/발렌타인데이',
    },
    {
      name: '빼빼로데이',
      url: 'https://www.instagram.com/explore/tags/빼빼로데이',
    },
    {
      name: '화이트데이',
      url: 'https://www.instagram.com/explore/tags/화이트데이',
    },
    {
      name: '생일',
      url: 'https://www.instagram.com/explore/tags/생일',
    },
  ];

  return (
    <div className="banner">
      <Swiper
        className="banner-slider"
        loop
        slidesPerView={6}
        navigation={{
          nextEl: '.slider-button-next',
          prevEl: '.slider-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {anniversaryList.map(({ name, url }) => (
          <SwiperSlide>
            <a href={url} target="_blank">{name}</a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-button-prev" />
      <div className="slider-button-next" />
    </div>
  );
};

export default BannerSlider;