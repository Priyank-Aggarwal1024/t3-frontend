import { useEffect, useState } from "react";
import axios from "axios";
import { client } from "../utils/sanity/client";
const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const query = `
        *[_type == "product"] {
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
            "category": category->_id,
            "categoryName": category->title
          }
      `;
        const data = await client.fetch(query);
        setProducts(data || []);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products);
  return { products, isLoading, error };
};

export default useProducts;
