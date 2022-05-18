import React from 'react';
import BannerSlider from './BannerSlider';
import FooterLogo from './FooterLogo';

const Footer = () => {
  return (
      <div className="footer_banner">
        <div className="footer_container">
          <a href='https://www.instagram.com/instagram/' target="_blank" className='go_instagram' rel="noreferrer"><i class="fa-brands fa-instagram"></i> 인스타그램으로 기념일 더 보기 </a>
        </div>
        <BannerSlider />
        <FooterLogo/>
      </div>
  );
};

export default Footer;