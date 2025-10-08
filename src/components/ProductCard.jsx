import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto mb-4"
      />
      <h2 className="font-semibold text-lg mb-1 truncate">{product.title}</h2>
      <p className="text-gray-700 font-bold mb-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-auto bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 text-center transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
