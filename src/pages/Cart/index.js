import React, { useState } from "react";
// import CartItem from "./CartIte";
// import CartSummary from "./CartSummary";
import CartItem from "../../components/Cart/CartItems";
import './Cart.css'
import CartSummary from "../../components/Cart/CartSummary";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Air Jordan XXXIX PF 'Sol'",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7cc01e4d-9019-43b5-8cf1-6d7d99899a96/AIR+JORDAN+XXXIX+PF.png",
      price: 18395,
      size: "8.5",
      color: "White/Black/University Red",
      quantity: 1,
    },
    {
      id: 2,
      name: "Jordan Sport Hoop Fleece",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/80dbc255-6af8-447a-a5d6-8ce1c9584652/M+J+DF+SPRT+HOOP+FLC+PANT.png",
      price: 5695,
      size: "M",
      color: "Black/Dark Shadow",
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = 1250;
  const total = subtotal + deliveryCharge;

  return (
    <div className="cart-page container py-5">
      <h2 className="mb-4">Bag</h2>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}
          {cartItems.length === 0 && (
            <p className="text-muted text-center">Your bag is empty.</p>
          )}
        </div>
        {/* Summary */}
        <div className="col-lg-4">
          <CartSummary
            subtotal={subtotal}
            deliveryCharge={deliveryCharge}
            total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
