import React, { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4">
      <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Fake Store</h1>
        <button onClick={() => setIsModalOpen(true)} className="relative">
          🛒
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2">{cart.length}</span>
          )}
        </button>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold">Cart Items</h2>
            {cart.length === 0 ? (
              <p className="text-gray-600">No items in the cart.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mt-4 border-b pb-2">
                  <img src={item.image} alt={item.title} className="h-10 w-10 object-contain" />
                  <p className="flex-1 ml-4">{item.title}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
            <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;