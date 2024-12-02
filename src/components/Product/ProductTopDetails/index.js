import React, { useContext, useState } from "react";
import { BsHeart } from "react-icons/bs";
import "./ProductDetails.css";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";

const ProductDetails = ({ product }) => {
  const [selectedVariation, setSelectedVariation] = useState(product.variations[0]);
  const { addToCart , cart,authToken,updateUserData,userData} = useContext(AppContext);
  const handleAddToCart = () => {
    updateUserData()
    if (userData) {
      // Handle API call for logged-in users (optional)
      product = {...product,variations:selectedVariation,quantity:1,rating:3}
      console.log("Logged-in user: Adding product to server cart...");
      console.log(authToken)
      console.log({
        Authorization: `Bearer ${authToken}`,
    });
    
      axios.post(`/cartitem/add?productId=${product.productId}&quantity=${product.quantity}&variations=${product.variations}`, {},{
       
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    }).then((x)=>{
        updateUserData()
      })
    }else{
      console.log({...product,variations:selectedVariation})
      console.log("---------")
      // addToCart({...product,variations:selectedVariation,quantity:1}).then(()=>{
      // console.log(cart)
    // })
    }
    
  };
  // console.log(product)
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
        <p>Select variation</p>
        <div className="sizes">
          {product.variations.map((variation, index) => (
            <button
              key={index}
              // disabled={product.unavailablevariations.includes(variation)}
              className={selectedVariation === variation ? "selected-size" : ""}
              onClick={() => setSelectedVariation(variation)}
            >
              {variation}
            </button>
          ))}
        </div>
        {/* <a href="#" className="size-guide">
          Size Guide
        </a> */}
      </div>

      <button className="add-to-bag" onClick={handleAddToCart}>Add to Bag</button>
      <button className="favorite">
        <BsHeart /> Favorite
      </button>
    </div>
  );
};

export default ProductDetails;
