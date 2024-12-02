import React, { useContext, useEffect, useState } from "react";
// import CartItem from "./CartIte";
// import CartSummary from "./CartSummary";
import CartItem from "../../components/Cart/CartItems";
import './Cart.css'
import CartSummary from "../../components/Cart/CartSummary";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

const CartPage = () => {
  const { cart, authToken, setCart, userData, updateUserData } = useContext(AppContext);
  const [cartItems, setCartItems] = useState([]);

  let products = []
  useEffect(() => {
    // updateUserData()
    if (userData) {
      setCartItems(userData.userCart.listOfCartItems)
      // userData.userCart.listOfCartItems.map((x,index)=>{
      //   axios.get(`/product/${x.productId}`).then((res)=>{
      //     products.push({...res.data,id:index, quantity:x.quantity,variations:x.variations})
      //     setCartItems(products)
      //   }).finally(()=>{

      //     console.log(products)
      //   })
      // })

    }
    // console.log(products)
  }, [userData])

  useEffect(() => {
    updateUserData()
  }, [])
  // useEffect(()=>{
  //   setCart(cartItems)

  // },[cartItems])

  const handleQuantityChange = (item) => {
    // setCartItems((prevItems) =>
    //   prevItems.map((item, index) => {
    //     item.id = index;
    //     // if (item.id === id){
    //     //   axios.put("/cartitem/updateitem?cartid=1",{
    //     //     "cartItemId": 1,
    //     //     "productId": 1,
    //     //     "quantity": 77,
    //     //     "variations": "Gray"
    //     // })
    //     // }
    //     return item.id === id ? { ...item, quantity: newQuantity } : item
    //   })
    // );
    if (userData) {
      axios.put(`/cartitem/updateitem`,{
        "cartItemId": item.id,
    "productId": item.productId,
    "quantity": item.quantity,
    "variations": item.variations
      }, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }
      ).then((res) => {
        console.log(res)
        updateUserData()
      })
    }

  };

  const handleRemoveItem = (id) => {
    // setCartItems((prevItems) => prevItems.filter((item,index) => {
    //   item.id = index
    //   return item.id !== id}));
    if (userData) {
      axios.delete(`/cartitem/deleteitem?cartItemId=${id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        }
      }
      ).then((res) => {
        console.log(res)
        updateUserData()
      })
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryCharge = subtotal > 0 ? 49 : 0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="cart-page container py-5">
      <h2 className="mb-4">Bag</h2>
      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          {cartItems.map((item, index) => {
            item.id = item.cartItemId
            console.log(index)
            return (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />);
          })}
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


// const CartPage = ({ cart }) => {
//   const [cartItems, setCartItems] = useState(cart);

//   const handleQuantityChange = (id, newQuantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const handleAddToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevItems.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   };

//   const handleDecreaseQuantity = (id) => {
//     setCartItems((prevItems) =>
//       prevItems
//         .map((item) =>
//           item.id === id
//             ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
//             : item
//         )
//         .filter((item) => item.quantity > 0) // Remove item if quantity is 0
//     );
//   };

//   const handleRemoveItem = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const deliveryCharge = 1250;
//   const total = subtotal + deliveryCharge;

//   return (
//     <div className="cart-page container py-5">
//       <h2 className="mb-4">Bag</h2>
//       <div className="row">
//         {/* Cart Items */}
//         <div className="col-lg-8">
//           {cartItems.map((item) => (
//             <CartItem
//               key={item.productId}
//               item={item}
//               onAdd={() => handleAddToCart(item)} // Pass Add function
//               // onDecrease={() => handleDecreaseQuantity(item.productId)} // Pass Decrease function
//               onQuantityChange={handleQuantityChange} // Optional
//               onRemove={() => handleRemoveItem(item.productId)} // Pass Remove function
//             />
//           ))}
//           {cartItems.length === 0 && (
//             <p className="text-muted text-center">Your bag is empty.</p>
//           )}
//         </div>
//         {/* Summary */}
//         <div className="col-lg-4">
//           <CartSummary
//             subtotal={subtotal}
//             deliveryCharge={deliveryCharge}
//             total={total}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
