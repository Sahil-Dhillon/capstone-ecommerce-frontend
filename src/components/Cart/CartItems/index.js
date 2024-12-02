import React from "react";
import { MdDelete } from "react-icons/md";
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, name,brand,description, image, price, variations, quantity } = item;

  return (
    <div className="cart-item d-flex justify-content-between align-items-center py-3 border-bottom">
      <div className="d-flex align-items-start">
        <img
          src={image}
          alt={name}
          className="img-thumbnail me-3"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div>
          <h6 className="fw-bold">{name}</h6>
          <h6 className="text-muted mb-1">{brand}</h6>
          <p className="text-muted mb-1">{description}</p>
          <p className="mb-1">{variations}</p>
          {/* <p className="mb-1">Color: {color}</p> */}
        </div>
      </div>
      <div>
        <p className="fw-bold">MRP: ₹{price}</p>
      </div>
      <div className="d-flex align-items-center">
        <button
          className="btn btn-outline-secondary btn-sm me-2"
          onClick={() => onQuantityChange({...item, quantity:quantity - 1})}
          disabled={quantity === 1}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="btn btn-outline-secondary btn-sm mx-2"
          onClick={() => onQuantityChange({...item, quantity:quantity + 1})}
        >
          +
        </button>
      </div>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => onRemove(id)}
      >
        <MdDelete className="mb-1"/>
      </button>
    </div>
  );
};

export default CartItem;
