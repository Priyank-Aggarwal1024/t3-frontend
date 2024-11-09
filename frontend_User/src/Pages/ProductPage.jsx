import React, { useEffect, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import useProducts from "../hooks/useProducts"; // Import your custom hook

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const { products, isLoading } = useProducts(); // Use the useProducts hook
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((prod) => prod._id === id);
      setSelectedProduct(product);
    }
  }, [products, id]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (isLoading) {
    return <Loader />; // Show loader while fetching data
  }

  if (!selectedProduct) {
    return <div>No product found.</div>; // Handle case where product is not found
  }

  return (
    <div className="bg-white gap-8 text-black min-h-screen flex px-4 md:px-12 pt-24 items-start">
      <ScrollRestoration />
      <img className="w-full h-[80vh] object-cover rounded-md" src={selectedProduct.image} alt={selectedProduct.name} />
      <div className="w-full">
      <div className="flex flex-wrap gap-2 md:flex-row mb-2 items-start justify-between md:items-center">
              <div className="text-xs flex items-center gap-1">
                {/* <BiSolidCategory /> */}
                <p>{selectedProduct.category}, {selectedProduct.subcategory}</p>
              </div>
            </div>
        <div className="">
          <h2 className="text-xl md:text-5xl font-bold uppercase">{selectedProduct.name}</h2>
          <p className="text-darkSecondary backdrop-blur-md py-2 rounded-md text-xs">
            ₹{selectedProduct.price} INR
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 relative">
          <div className="w-full relative pt-4 rounded-md md:rounded-md flex flex-col">
            <p className="text-xl font-bold">Product Description</p>
            <div className="md:overflow-scroll no-scrollbar">
              <p className="text-xs md:text-sm whitespace-pre-wrap break-words">
                {showFullDescription
                  ? selectedProduct.description
                  : `${selectedProduct.description.slice(0, 300)}...`}
                {selectedProduct.description.length > 150 && (
                  <span
                    className="text-black font-semibold cursor-pointer ml-1"
                    onClick={toggleDescription}
                  >
                    {showFullDescription ? " Read less" : " Read more"}
                  </span>
                )}
              </p>
            </div>
          <button className="py-2 px-6 bg-primary rounded-md mt-8 text-sm">Enquire</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
