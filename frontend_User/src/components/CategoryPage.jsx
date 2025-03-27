import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/sanity/client";
import ProductCard from "./ProductCard";
import NoDataFound from "./NoDataFound";

const CategoryPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && category._ref == $id]{
          _id,
          name,
          description,
          "images": images[].asset->url,
          price,
          discount,
          stock,
          "categoryName": category->title
        }`;

        const result = await client.fetch(query, { id });
        if (result.length > 0) {
          setCategoryName(result[0].categoryName);
        }
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="dark:bg-black bg-white text-black dark:text-white mx-auto px-4 py-8">
      <h2 className="xl:text-4xl text-left lg:text-3xl md:text-2xl text-xl dark:text-white text-black md:pb-6 pb-4">
        {categoryName || "Category"}
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 gap-2">
          {products.map((product, idx) => (
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
