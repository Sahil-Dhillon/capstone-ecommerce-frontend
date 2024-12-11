// components/CategorySection.jsx
import React from 'react';
import './CategorySection.css';
import phone_img from '../../../assets/img/categories/phones.png'
import fashion_img from '../../../assets/img/categories/fashion.png'
import appliances_img from '../../../assets/img/categories/appliance.png'
import { Link } from 'react-router-dom';
const categories = [
  {
    title: 'Electronics',
    description: 'High class, high quality laptops, phones & accessories at affordable prices.',
    image: phone_img,
    to:"/category/Electronics"
  },
  {
    title: 'MEN & WOMEN FASHION',
    description: 'Timeless styles for every occasion are made available.',
    image: fashion_img,
    to:"/category/Fashion"
  },
  {
    title: 'HOME APPLIANCES',
    description: 'We’ve got modern appliances for ultimate comfort & convenience.',
    image: appliances_img,
    to:"/category/Home Appliances"
  },
];

const CategorySection = () => {
  return (
    <div className="category-container">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-cards">
        {categories.map((category, index) => (
          <Link to={category.to} key={index} className="category-card">
            <img src={category.image} alt={category.title} className="category-image" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
      <Link to="/category/Electronics" className="shop-all-button">Shop All</Link>
    </div>
  );
};

export default CategorySection;
