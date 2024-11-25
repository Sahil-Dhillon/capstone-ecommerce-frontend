import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to="/jordan" className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
