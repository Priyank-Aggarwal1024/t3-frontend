import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
const AllCategory = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const { products } = useProducts();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const groupedProducts = products.reduce((acc, product) => {
          if (!acc[product.categoryName]) {
            acc[product.categoryName] = [];
          }
          acc[product.categoryName].push(product);
          return acc;
        }, {});

        setProductsByCategory(groupedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [products]);

  return (
    <div className="min-h-screen sm:p-6 p-4 text-black bg-white dark:bg-black dark:text-white">
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className="my-12 max-w-6xl mx-auto">
          <h2 className="xl:text-2xl lg:text-xl text-lg uppercase tracking-[-0.01em] font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
            {category}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto w-full lg:grid-cols-4 sm:gap-4 gap-2 gap-y-4">
            {products.map((product, idx) => (
              <ProductCard product={product} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategory;
