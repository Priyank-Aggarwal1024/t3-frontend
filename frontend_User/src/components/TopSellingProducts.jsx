import { useState, useEffect } from "react";
import { client } from "../utils/sanity/client";
import ProductCard from "./ProductCard";
import NoDataFound from "./NoDataFound";

const TopSellingProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchTopSellingProducts = async () => {
    try {
      const response = await client.fetch(`
  *[_type == "topSellingProducts"][0]{
        products[]->{
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
            "category": category->title
          }
      }
    `);
      setProducts(response.products);
    } catch (error) {
      console.error("Error fetching top selling products:", error);
    }
  };

  useEffect(() => {
    fetchTopSellingProducts();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="xl:text-4xl text-center lg:text-3xl md:text-2xl text-xl dark:text-white text-black md:pb-6 pb-4">
        TOP SELLING PRODUCTS
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      ) : (
        <NoDataFound text={"No products found"} />
      )}
    </div>
  );
};

export default TopSellingProducts;
