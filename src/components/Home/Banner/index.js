// components/Banner.jsx
import React,{useState} from 'react';
import './banner.css'; // Create a CSS file for styling
import banner_img from '../../../assets/img/hero/bg.png'
import { Link } from 'react-router-dom';
const Banner = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleMouseMove = (e) => {
    if ((e.clientX < window.innerWidth / 2 ) && (e.clientY < window.innerHeight/4*3)) {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }
  };
  return (
    <div className="banner-container" onMouseMove={handleMouseMove}>
      <div
        className="banner-overlay"
        style={{
          opacity: isOverlayVisible ? 1 : 0, 
        }}
      ></div>
      {/* <div className='overlay'></div> */}
      <img src={banner_img} alt="Black Friday Sale" className="banner-image" />
      <div className="banner-text" style={{
          color: isOverlayVisible ? "#fff" : "#3b3837", 
        }}>
        <div className='category-nav'>men</div>
        <div className='category-nav'>women</div>
        <div className='category-nav'>kids</div>
        <div className='category-nav'><Link to="/category/Clothing" style={{ textDecoration: "none", color: "inherit" }}>more</Link></div>
      </div>
    </div>
  );
};

export default Banner;
