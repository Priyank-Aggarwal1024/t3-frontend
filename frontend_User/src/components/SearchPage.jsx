import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import NoDataFound from "./NoDataFound";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import ProductCard from "./ProductCard";

const SearchPage = ({ setShowSearchPage }) => {
  const { products, loading, error } = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 pb-6 bg-white relative text-black dark:bg-black dark:text-white">
      <div className="max-w-2xl mx-auto sticky sm:pt-6 pb-1 pt-12 top-0 bg-white dark:bg-black z-[2]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-white text-black dark:text-black outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <RxCross2
              className="text-black text-xl absolute right-5 top-[50%] translate-y-[-50%] cursor-pointer"
              onClick={() => setQuery("")}
            />
          )}
        </div>
      </div>
      {loading && (
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
          Loading products...
        </p>
      )}
      {error && (
        <p className="text-center text-red-500 dark:text-red-400 mt-4">
          Error loading products!
        </p>
      )}
      {filteredProducts.length > 0 ? (
        <div className="mt-6 max-w-2xl mx-auto px-1 grid grid-cols-2 sm:gap-4 xs:gap-2 gap-1 gap-y-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <NoDataFound text={"No products found"} />
      )}
    </div>
  );
};

export default SearchPage;
