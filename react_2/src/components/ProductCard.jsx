const ProductCard = ({ product, addToCart }) => {
    return (
      <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px", width: "200px" }}>
        <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    );
  };
  
  export default ProductCard;
  