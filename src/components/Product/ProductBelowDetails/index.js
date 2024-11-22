import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
// import "./ProductDetails.css";

const ProductBelowDetails = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div>
        {/* Product Description */}
      <div className="product-description">
        <h3>Product Description</h3>
        <p>{product.description}</p>
      </div>

      {/* Specifications Table */}
      <div className="product-specifications">
        <h3>Specifications</h3>
        <table>
          <tbody>
            {product.listOfSpecs.map((spec,key) => (
              <tr key={key}>
                <td className="spec-key">{spec.title}</td>
                <td className="spec-value">{spec.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductBelowDetails;
