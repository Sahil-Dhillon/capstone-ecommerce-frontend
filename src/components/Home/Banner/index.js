import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './banner.css';
import banner_img_1 from '../../../assets/img/hero/bg1.jpg';
import banner_img_2 from '../../../assets/img/hero/bg2.jpg';
import banner_img_3 from '../../../assets/img/hero/bg3.jpg';
import banner_img_4 from '../../../assets/img/hero/bg4.jpg';
import banner_img_5 from '../../../assets/img/hero/bg5.jpg';
import banner_img_6 from '../../../assets/img/hero/bg6.jpg';
import banner_img_7 from '../../../assets/img/hero/bg7.jpg';
import banner_img_8 from '../../../assets/img/hero/bg8.jpg';
import banner_img_9 from '../../../assets/img/hero/bg9.jpg';
import banner_img_10 from '../../../assets/img/hero/bg10.jpg';

const Banner = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  // useEffect(()=>{
  //   axios.get(`/subcategory/byCategoryName/${categoryName}`)
  //         .then((subCategoryResponse) => {
  //           setSubcategories(subCategoryResponse.data);
  //           setCategory(response.data); // Set categories data
  //           setLoading(false); // Set loading to false
  //         });
  // },[])
  const banners = [
    {
      image: banner_img_3,
      categories: [
      ],
    },
    {
      image: banner_img_9,
      categories: [
        { name: 'Refrigerator', link: '/products/Refrigerator' },
        { name: 'Washing Machine', link: '/products/Washing Machine' },
        { name: 'Air Conditioner', link: '/products/Air Conditioner' },
        { name: 'more', link: '/category/Home Appliances' },
      ],
    },
    {
      image: banner_img_10,
      categories: [
        { name: 'Mobile Phones', link: '/products/Mobile Phones' },
        { name: 'Laptops', link: '/products/Laptops' },
        { name: 'Headphones', link: '/products/Headphones' },
        { name: 'More', link: '/category/Electronics' },
      ],
    },
    {
      image: banner_img_5,
      categories: [
        { name: `men`, link: "/products/Men's Clothing" },
        { name: `women`, link: "/products/Women's Clothing"},
        { name: 'kids', link: '/products/Kids' },
        { name: 'more', link: '/category/Fashion' },
      ],
    },
    {
      image: banner_img_6,
      categories: [
        { name: 'Fiction', link: '/products/Fiction' },
        { name: 'Non Fiction', link: '/products/Non-Fiction' },
        { name: 'Business', link: '/products/Business & Entrepreneurship' },
        { name: 'More', link: '/category/Books' },
      ],
    },
    {
      image: banner_img_7,
      categories: [
        { name: 'Earrings', link: '/products/Earrings' },
        { name: 'Rings', link: '/products/Rings' },
        { name: 'Pendants', link: '/products/Necklaces & Pendants' },
        { name: 'More', link: '/category/jewelry & accessories' },
      ],
    },
    {
      image: banner_img_8,
      categories: [
        { name: 'fitness equipments', link: '/products/fitness equipments' },
        { name: 'Sports apparel', link: '/products/Sports apparel' },
        { name: 'outdoor gear', link: '/products/Outdoor gear' },
        { name: 'More', link: '/category/sports & fitness' },
      ],
    },
    {
      image: banner_img_4,
      categories: [
        { name: 'skin care', link: '/products/Skin Care' },
        { name: 'hair care', link: '/products/Hair Care' },
        { name: 'makeup', link: '/products/Makeup' },
        { name: 'More', link: '/category/beauty & personal care' },
      ],
    },
  ];
  const handleMouseMove = (e) => {
    if (e.clientX < window.innerWidth / 2 && e.clientY < (window.innerHeight / 4) * 3) {
      setOverlayVisible(true);
    } else {
      setOverlayVisible(false);
    }
  };

  return (
    <Carousel>
      {banners.map((banner, index) => (
        <Carousel.Item key={index} className="banner-item">
          <div className="banner-container" onMouseMove={handleMouseMove}>
            <div
              className="banner-overlay"
              style={{
                opacity: isOverlayVisible ? 1 : 0,
              }}
            ></div>
            <img src={banner.image} alt={`Banner ${index + 1}`} className="banner-image" />
            <div
              className="banner-text"
              style={{
                color: isOverlayVisible ? '#fff' : 'transparent',
              }}
            >
              {banner.categories.map((category, idx) => (
                <div className="category-nav" key={idx}>
                  <Link to={category.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {category.name.toLowerCase()}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Banner;
