import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect, useRef, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import useProducts from "../hooks/useProducts"; // Import your custom hook

const ProductPage = () => {
  const { id } = useParams(); // Get the product ID from URL params
  const { products, isLoading } = useProducts(); // Use the useProducts hook
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [images, setImages] = useState([]);
  const [imgInd, setImgInd] = useState(0);
  const swiper = useRef(null);
  const handleEnquire = (product) => {
    window.open("https://wa.me/6395163538")
  }
  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((prod) => prod._id === id);
      setSelectedProduct(product);
      console.log(product)
      setImages(product.images)
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
    <div className="bg-white gap-8 text-black min-h-screen flex px-4 md:px-12 pt-24 items-start xl:flex-row flex-col pb-6">
      <ScrollRestoration />
      <div className="w-full xl:w-1/2 flex flex-col sm:gap-6 gap-4 h-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={(swiper) => setImgInd(swiper.activeIndex)}
          className="w-full"
          ref={swiper}
        >
          {
            images.map((item, ind) =>
              <SwiperSlide key={ind}>
                <img className="w-full xxs:h-[65vh] h-[55vh] sm:h-[80vh] object-cover rounded-md" src={item} alt={selectedProduct.name} />
              </SwiperSlide>
            )
          }
        </Swiper>
        <div className="w-full grid grid-cols-4 sm:gap-4 gap-2">
          {
            images.slice(0, Math.min(images.length, 4)).map((item, ind) => <div className="w-full cursor-pointer rounded-lg relative h-full" key={ind}>
              {
                imgInd == ind && <div className="w-full h-full absolute z-1 bg-[#ffffff6b]"></div>
              }
              <div className="h-full flex items-center justify-center">
                <img src={item} alt={selectedProduct.name} className="object-cover my-auto w-full cursor-pointer rounded-lg" onClick={() => swiper.current?.swiper?.slideTo(ind)} />
              </div>
            </div>
            )
          }
        </div>
      </div>
      <div className="w-full h-full">
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
            <button className="py-2 px-6 bg-primary rounded-md mt-8 text-sm" onClick={() => handleEnquire(selectedProduct.name)}>Enquire</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
