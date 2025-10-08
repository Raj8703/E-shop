import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center gap-4 border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 object-contain"
              />
              <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="font-bold text-indigo-600">${item.price}</p>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, +e.target.value)}
                  className="border w-20 mt-2 rounded px-2 py-1"
                />
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-4 text-right">
            Total: ${total.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartPage;
