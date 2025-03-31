import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import NoDataFound from "./NoDataFound";
const AllProducts = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-lg text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full py-8 dark:bg-black bg-white px-4">
      <h2 className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-center dark:text-white text-black pb-6 uppercase tracking-[-0.01em]">
        ALL PRODUCTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto w-full lg:grid-cols-4 sm:gap-4 gap-2 gap-y-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      {products.length === 0 && !loading && !error && (
        <NoDataFound text={"No products found"} />
      )}
    </div>
  );
};

export default AllProducts;
