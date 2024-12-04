import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Import the custom CSS for styling

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.productId}`} className="product-card">
      <div className="card-img-container">
        <img
          src={product.profileImgUrl}
          alt={product.name}
          className="card-img"
        />
      </div>
      <div className="card-content">
        <p className="card-tag">Just In</p>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-subtitle">{product.brand}</p>
        <p className="card-price">
          ₹ {product.price} 
        </p>
        <button className="btn btn-dark btn-sm"> Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
