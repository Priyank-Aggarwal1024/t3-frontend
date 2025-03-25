import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import NoDataFound from "./NoDataFound";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const SearchPage = () => {
  const { products, loading, error } = useProducts();
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen px-4 pb-6 bg-white relative text-black dark:bg-black dark:text-white">
      <div className="max-w-2xl mx-auto sticky sm:pt-6 pb-1 pt-12 top-0 bg-white dark:bg-black z-[2]">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-white text-black dark:text-black outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <RxCross2
          className="text-black text-xl absolute right-5 top-[50%] translate-x-[-50%] cursor-pointer"
          onClick={() => setQuery("")}
        />
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
      <div className="mt-6 space-y-6 max-w-2xl mx-auto px-1">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="flex justify-between w-full h-full flex-row items-center xs:gap-4 gap-3  p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-black"
            >
              <div className="max-w-[50%] w-full flex justify-center items-center ">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-32 h-3w-32 xs:h-48 xs:w-full  object-cover rounded-md dark:border-white border-black border"
                />
              </div>
              <div className="lg:w-2/3 w-full max-w-[50%] lg:pl-6 mt-4 lg:mt-0 text-left lg:text-left">
                <h3 className="text-lg sm:text-xl font-semibold">
                  {product.name}
                </h3>
                <p className="text-sm  xs:block hidden sm:text-base mt-1 text-gray-600 dark:text-gray-400">
                  {product.description.slice(0, 80)}...
                </p>
                <div className="mt-2 flex items-center justify-start lg:justify-start space-x-2">
                  <span className="text-lg font-bold text-[#0C8FD7]">
                    ₹{product.discount || product.price}
                  </span>
                  {product.discount && (
                    <span className="text-sm text-red-500 dark:text-red-400 line-through">
                      ₹{product.price}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                  Category: {product.categoryName}
                </p>
                <Link
                  to={`/product/${product._id}`}
                  className="mt-3 w-full sm:w-auto text-center block  bg-[#0C8FD7] text-white px-6 py-2 rounded-md hover:opacity-80"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <NoDataFound text={"No products found"} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
