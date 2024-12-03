import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CartSummary = ({ subtotal, deliveryCharge, total,setOrder,cartItems }) => {
  const [couponCode, setCouponCode] = useState(""); // State for the coupon code
  const [discount, setDiscount] = useState(0); // State for the discount value
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const navigate = useNavigate();
  // Example coupon codes with discount type and minimum total requirements
  const validCoupons = {
    SAVE10: { discount: 10, type: "percentage", minTotal: 1000 }, // 10% discount with ₹1000 minimum
    FLAT200: { discount: 200, type: "flat", minTotal: 2000 }, // ₹200 flat discount with ₹2000 minimum
    NEWUSER50: { discount: 50, type: "flat", minTotal: 500 }, // ₹50 flat discount with ₹500 minimum
  };

  // Recalculate discount when subtotal or coupon changes
  useEffect(() => {
    if (validCoupons[couponCode] && subtotal >= validCoupons[couponCode].minTotal) {
      const { discount, type } = validCoupons[couponCode];
      const discountValue =
        type === "flat" ? discount : (subtotal * discount) / 100; // Calculate based on type
      setDiscount(Math.min(discountValue, subtotal)); // Ensure discount doesn't exceed subtotal
    } else {
      setDiscount(0); // Reset discount if conditions are not met
    }
  }, [couponCode, subtotal]);

  // Handle Apply Coupon
  const handleApplyCoupon = (code) => {
    if (!validCoupons[couponCode]) {
      setErrorMessage("Invalid coupon code. Please try again.");
      return;
    }
    const { minTotal } = validCoupons[couponCode];
    if (subtotal < minTotal) {
      setErrorMessage(
        `This coupon requires a minimum total of ₹${minTotal}. Your subtotal is ₹${subtotal}.`
      );
      return;
    }
    setCouponCode(code);
    setErrorMessage(""); // Clear error if coupon is valid
    setShowModal(false); // Close modal
  };

  // Handle coupon selection from modal
  const handleSelectCoupon = (code) => {
    // setCouponCode(code);

    if (!validCoupons[code]) {
      setErrorMessage("Invalid coupon code. Please try again.");
      return;
    }
    const { minTotal } = validCoupons[code];
    if (subtotal < minTotal) {
      setErrorMessage(
        `This coupon requires a minimum total of ₹${minTotal}. Your subtotal is ₹${subtotal}.`
      );
      return;
    }
    setCouponCode(code);
    setErrorMessage(""); // Clear error if coupon is valid
    setShowModal(false); // Close modal
  };

  // Remove the applied coupon
  const handleRemoveCoupon = () => {
    setCouponCode("");
    setDiscount(0);
  };

  const finalTotal = total - discount;

  const submitOrder = ()=>{
    setOrder({
      "coupon": couponCode,
  "orderStatus": "Pending",
  "totalAmount": finalTotal,
  "subtotal":subtotal,
  "shipping":deliveryCharge,
  "discount":discount,
  "listOfOrderItems": [
    ...cartItems
  ],
    })

    navigate('/Checkout')

  }

  return (
    <>
      {/* Summary Section */}
      <div className="cart-summary card p-4">
        <h5 className="card-title">Summary</h5>
        <div className="d-flex justify-content-between my-2">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="d-flex justify-content-between my-2">
          <span>Estimated Delivery & Handling</span>
          <span>₹{deliveryCharge}</span>
        </div>
        {discount > 0 && (
          <div className="d-flex justify-content-between my-2 text-success">
            <span>Discount ({couponCode})</span>
            <span>- ₹{discount}</span>
          </div>
        )}
        <hr />
        <div className="d-flex justify-content-between my-2 fw-bold">
          <span>Total</span>
          <span>₹{finalTotal}</span>
        </div>
        {couponCode && errorMessage === "" ? (
          <div className="mt-3">
            <p className="text-success">
              Coupon <strong>{couponCode}</strong> applied successfully!
            </p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-primary flex-grow-1"
                onClick={() => setShowModal(true)} // Open modal to change coupon
              >
                Change Coupon
              </button>
              <button
                className="btn btn-outline-danger flex-grow-1"
                onClick={handleRemoveCoupon} // Remove applied coupon
              >
                Remove Coupon
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary w-100 mt-2"
            onClick={() => setShowModal(true)} // Show modal on click
          >
            Apply Coupon
          </button>
        )}
        <Button onClick={()=> submitOrder()} className="btn btn-dark w-100 mt-3">Checkout</Button>
      </div>

      {/* Coupon Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Apply Coupon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <h6>Available Coupons</h6>
            <ul className="list-group">
              {Object.entries(validCoupons).map(([code, { discount, type, minTotal }]) => (
                <li
                  key={code}
                  className="list-group-item d-flex justify-content-between align-items-center"
                  onClick={() => handleSelectCoupon(code)} // Select coupon
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <span>{code}</span>
                    <small className="text-muted d-block">
                      {type === "flat"
                        ? `Flat ₹${discount} OFF`
                        : `${discount}% OFF`} (Min: ₹{minTotal})
                    </small>
                  </div>
                  <span className="badge bg-success">
                    {type === "flat" ? `₹${discount} OFF` : `${discount}% OFF`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleApplyCoupon}>
            Apply Coupon
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartSummary;
