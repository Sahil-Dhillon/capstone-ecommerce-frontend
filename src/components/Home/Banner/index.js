// components/Banner.jsx
import React from 'react';
import './banner.css'; // Create a CSS file for styling
import banner_img from '../../../assets/img/banners/3.png'
const Banner = () => {
  return (
    <div className="banner-container">
      <img src={banner_img} alt="Black Friday Sale" className="banner-image" />
      <div className="banner-text">
        {/* <h1>BLACK FRIDAY</h1> */}
        {/* <h2>SALE</h2> */}
      </div>
    </div>
  );
};

export default Banner;
