import React from "react";

const CartSummary = ({ subtotal, deliveryCharge, total }) => {
  return (
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
      <hr />
      <div className="d-flex justify-content-between my-2 fw-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <button className="btn btn-dark w-100 mt-3">Member Checkout</button>
    </div>
  );
};

export default CartSummary;
