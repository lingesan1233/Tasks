import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => removeFromCart(item.id)} style={{ background: "red", color: "white" }}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${getTotalPrice()}</h2>
          <h2>Discounted Price: ${(getTotalPrice() * 0.9).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
