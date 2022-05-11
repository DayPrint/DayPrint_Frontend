import React from 'react';
import BannerSlider from './BannerSlider';

const Footer = () => {

  return (
    <div className="footer_banner">
      <div className="footer_container">
        <a href='https://www.instagram.com/instagram/' target="_blank" className='go_instagram'><i class="fa-brands fa-instagram"></i> 인스타그램으로 기념일 더 보기 </a>
      </div>
      <BannerSlider />
      <div id="footer">
        <p>© 2022 DayPrint</p>
      </div>
    </div>
  );
};

export default Footer;