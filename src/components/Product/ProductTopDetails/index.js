import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import "./ProductDetails.css";

const ProductDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Product Rating */}
      <div className="rating">
          <span className="rating-stars">
            {"★".repeat(Math.floor(product.rating)) + "☆".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="rating-value">({product.rating}/5)</span>
        </div>
      <h3>MRP: ₹ {product.price}</h3>
      <p className="inclusive">Inclusive of all taxes (Also includes all applicable duties)</p>

      <div className="size-options">
        <p>Select Size</p>
        <div className="sizes">
          {product.sizes.map((size, index) => (
            <button
              key={index}
              disabled={product.unavailableSizes.includes(size)}
              className={selectedSize === size ? "selected-size" : ""}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
        <a href="#" className="size-guide">
          Size Guide
        </a>
      </div>

      <button className="add-to-bag">Add to Bag</button>
      <button className="favorite">
        <BsHeart /> Favorite
      </button>
    </div>
  );
};

export default ProductDetails;
