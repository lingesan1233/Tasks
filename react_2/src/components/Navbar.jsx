import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "20px" }}>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default Navbar;
