import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"; // Import the custom CSS for styling
import { Button, Modal, Toast, ToastContainer } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const [show, setShow] = useState(false);
  // const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowToast = () => {
    setShow(true);
    // setTimeout(() => setShow(false), 3000); // Automatically hide toast after 3 seconds
  };

  return (
    <div className="product-card">
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
        {/* <button className="btn btn-dark btn-sm me-1" onClick={handleShowToast}> Add to Cart</button> */}
      </div>
      <Link to={`/product/${product.productId}`} className="btn btn-dark rounded-top-0"> Show Details</Link>

      {/* Toast Notification */}
      <ToastContainer position="middle-center" className="p-3">
        <Toast show={show} onClose={() => setShow(false)} delay={1000} autohide>
          <Toast.Header closeButton>
            <strong className="me-auto">Cart Notification</strong>
          </Toast.Header>
          <Toast.Body>Product added to cart successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      {/* Modal for the pop-up */}
      {/* <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Cart Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product added to cart successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default ProductCard;
