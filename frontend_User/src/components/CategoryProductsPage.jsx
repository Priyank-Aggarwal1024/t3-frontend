import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../utils/sanity/client";
import ProductCard from "./ProductCard";
import NoDataFound from "./NoDataFound";

const CategoryProductsPage = () => {
  const { id } = useParams(); // Get category ID from URL
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const query = `*[_type == "shopByCategory" && _id == $id][0]{
              _id,
              title,
              "imageUrl": image.asset->url,
              "products": products[]->{
                _id,
            name,
            "slug": slug.current,
            description,
            "images": images[].asset->url,
            "video": video.asset->url,
            "sizeChart": sizeChart.asset->url,
            sizes,
            colors,
            price,
            discount,
            stock,
            "category": category->_id
              }
            }`;

        const data = await client.fetch(query, { id });
        setCategory(data);
      } catch (error) {
        console.error("Error fetching category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!category) return <p>Category not found.</p>;

  return (
    <div className="dark:bg-black bg-white mx-auto px-4 py-10">
      <div className="text-center mb-8 max-w-6xl mx-auto">
        <h2 className="xl:text-4xl text-center lg:text-3xl md:text-2xl text-xl dark:text-white text-black pb-6  uppercase tracking-[-0.01em]">
          {category.title}
        </h2>
        <img
          src={category.imageUrl}
          alt={category.title}
          className="w-full h-96 object-fill  rounded-md mt-4"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto w-full lg:grid-cols-4 sm:gap-4 gap-2 gap-y-4">
        {category.products.length > 0 ? (
          category.products.map((product) => <ProductCard product={product} />)
        ) : (
          <NoDataFound text={"No products available in this category."} />
        )}
      </div>
    </div>
  );
};

export default CategoryProductsPage;
