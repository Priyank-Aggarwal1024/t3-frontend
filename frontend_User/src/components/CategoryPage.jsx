import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/sanity/client";
import ProductCard from "./ProductCard";
import NoDataFound from "./NoDataFound";
import useProducts from "../hooks/useProducts";
import useCategory from "../hooks/useCategory";

const CategoryPage = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { categories } = useCategory();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  useEffect(() => {
    if (!id) return;
    if (id) {
      setCategoryName(categories.find((category) => category._id === id));
      setCategoryProducts(
        products.filter((product) => product.category === id)
      );
    }
  }, [id, categories, products]);
  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white mx-auto px-4 py-8">
      <h2 className="xl:text-4xl text-center lg:text-3xl md:text-2xl text-xl dark:text-white text-black md:pb-6 pb-4 uppercase tracking-[-0.01em]">
        {categoryName?.title}
      </h2>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto w-full lg:grid-cols-4 sm:gap-4 gap-2 gap-y-4">
          {categoryProducts.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      ) : (
        <NoDataFound text={"No products available in this category."} />
      )}
    </div>
  );
};

export default CategoryPage;
