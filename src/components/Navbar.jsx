import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
      <Link
        to="/"
        className="text-2xl font-bold hover:text-yellow-300 transition"
      >
        E-Shop
      </Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>
        <Link to="/cart" className="relative hover:text-yellow-300 transition">
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
