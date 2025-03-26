import React, { useContext } from "react";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalPrice = totalPrice * 0.9; // 10% discount

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart />
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      <h2>Final Price (10% Discount): ${finalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default CartPage;
