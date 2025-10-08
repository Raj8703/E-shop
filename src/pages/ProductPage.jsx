import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product)
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Loading Product...
      </div>
    );

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
      <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-lg lg:max-w-2xl h-auto object-contain rounded-xl shadow-2xl"
        />
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold">{product.title}</h1>

        <p className="text-3xl lg:text-4xl font-bold text-indigo-600">
          ${product.price}
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white py-3 px-10 rounded-lg font-semibold shadow-lg transform hover:scale-105 hover:bg-indigo-500 transition w-max"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
