import React, { useContext, useState } from "react";
import { BsHeart } from "react-icons/bs";
import "./ProductDetails.css";
import { AppContext } from "../../../context/AppContext";
import axios from "axios";
import { Toast, ToastContainer } from "react-bootstrap";

const ProductDetails = ({ product }) => {
  const [show, setShow] = useState(false);
  
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
        setShow(true);
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
            {"★".repeat(Math.floor(product.productRating)) + "☆".repeat(5 - Math.floor(product.productRating))}
          </span>
          <span className="rating-value">({product.productRating}/5)</span>
        </div>
      <h3>MRP: ₹ {product.price}</h3>
      <h3>Available Quantity: {product.quantity}</h3>
      <p className="inclusive">Inclusive of all taxes (Also includes all applicable duties)</p>

      {product.variations.length > 0 && 
      <div className="size-options">
        <p>Select Size</p>
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
        
      </div>}

      <button className="add-to-bag" onClick={handleAddToCart}>Add to Bag</button>
      {/* <button className="favorite">
        <BsHeart /> Favorite
      </button> */}

<ToastContainer position="middle-center" className="p-3">
        <Toast show={show} onClose={() => setShow(false)} delay={1000} autohide>
          <Toast.Header closeButton>
            <strong className="me-auto">Cart Notification</strong>
          </Toast.Header>
          <Toast.Body>Product added to cart successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ProductDetails;
