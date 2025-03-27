import { useEffect, useState } from "react";
import { client } from "../utils/sanity/client";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function organizeCategories(categories) {
    const categoryMap = new Map();

    categories.forEach((cat) => {
      const { description, slug, ...rest } = cat;
      const slugValue = slug?.current || "";

      categoryMap.set(rest._id, {
        ...rest,
        slug: slugValue,
        children: [],
      });
    });
    const result = [];
    categoryMap.forEach((category) => {
      if (!category.parent || !categoryMap.has(category.parent?._id)) {
        result.push(category);
      } else {
        const parent = categoryMap.get(category.parent._id);
        parent.children.push(category);
      }
    });
    result.forEach((cat) => {
      cat.children.sort((a, b) => a.title.localeCompare(b.title));
    });
    result.sort((a, b) => b.order - a.order);
    return result;
  }
  const fetchCategories = async () => {
    setIsLoading(true);
    try {
      const data = await client.fetch(`*[_type == "category"]{
    _id,
    title,
    slug,
    order,
    description,
    "parent": parent->{
      _id,
      title
    }
  }`);
      if (data) {
        const organized = organizeCategories(data);
        setCategories(organized);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading, error };
};

export default useCategory;
