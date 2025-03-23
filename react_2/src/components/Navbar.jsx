import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#f8f9fa" }}>
      <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
