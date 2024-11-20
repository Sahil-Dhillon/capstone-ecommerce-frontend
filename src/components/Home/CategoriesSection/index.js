// components/CategorySection.jsx
import React from 'react';
import './CategorySection.css';
import phone_img from '../../../assets/img/categories/phones.png'
import fashion_img from '../../../assets/img/categories/fashion1.jpg'
import appliances_img from '../../../assets/img/categories/appliance.png'
const categories = [
  {
    title: 'PHONES & ACCESSORIES',
    description: 'High class, high quality phones & accessories at affordable prices.',
    image: phone_img,
  },
  {
    title: 'MEN & WOMEN FASHION',
    description: 'Timeless styles for every occasion are made available.',
    image: fashion_img,
  },
  {
    title: 'HOME APPLIANCES',
    description: 'We’ve got modern appliances for ultimate comfort & convenience.',
    image: appliances_img,
  },
];

const CategorySection = () => {
  return (
    <div className="category-container">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
      <button className="shop-all-button">Shop All</button>
    </div>
  );
};

export default CategorySection;
