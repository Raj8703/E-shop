import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const categories = [
  "All",
  "Electronics",
  "Jewelery",
  "Men's Clothing",
  "Women's Clothing",
];

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const filtered =
    filter === "all"
      ? products
      : products.filter((p) => p.category.toLowerCase() === filter);

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-3 mb-6 justify-center">
        {categories.map((cat) => {
          const lowerCat = cat.toLowerCase();
          const isActive = filter === lowerCat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(lowerCat)}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
