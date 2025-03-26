import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductList = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      {products.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);

        return (
          <div key={product.id} style={{ textAlign: "center" }}> {/* ✅ Center the text */}
            <img 
              src={product.image} 
              alt={product.title} 
              width="100" 
              style={{ display: "block", margin: "auto" }} // ✅ Center the image
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>
              {product.description.length > 100 
                ? product.description.substring(0, 100) + "..." 
                : product.description}
            </p> {/* ✅ Limits description to 100 characters */}
            {inCart ? (
              <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
