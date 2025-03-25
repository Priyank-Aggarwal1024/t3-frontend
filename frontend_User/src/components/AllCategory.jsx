import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
const AllCategory = () => {
  const [productsByCategory, setProductsByCategory] = useState({});
  const { products } = useProducts();
  console.log(products);
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
    <div className="min-h-screen p-6 bg-white text-black dark:bg-black dark:text-white">
      {Object.entries(productsByCategory).map(([category, products]) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">
            {category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
