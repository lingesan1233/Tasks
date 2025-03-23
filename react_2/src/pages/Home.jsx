import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart, removeFromCart, cart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Display Cart Items at Bottom of Page */}
      {cart.length > 0 && (
        <div style={{ marginTop: "50px" }}>
          <h2>Cart Items</h2>
          {cart.map((item) => (
            <div key={item.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} style={{ background: "red", color: "white" }}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
