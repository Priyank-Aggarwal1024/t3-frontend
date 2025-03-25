import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React, { useEffect, useRef, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useProducts from "../hooks/useProducts";
import { FaWhatsapp } from "react-icons/fa";
import NoDataFound from "../components/NoDataFound";
const ProductDetails = ({
  selectedProduct,
  showFullDescription,
  setShowFullDescription,
}) => {
  const finalPrice = selectedProduct.discount
    ? selectedProduct.discount
    : selectedProduct.price;
  const discountPercentage = selectedProduct.discount
    ? Math.round(
        ((selectedProduct.price - selectedProduct.discount) /
          selectedProduct.price) *
          100
      )
    : 0;
  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <h2 className="text-2xl md:text-4xl font-bold uppercase">
        {selectedProduct.name}
      </h2>
      <div className="flex items-center gap-2 mt-4">
        <p className="text-2xl font-semibold text-primary">₹{finalPrice} INR</p>
        {selectedProduct.discount > 0 && (
          <p className="text-lg text-gray-500 line-through">
            ₹{selectedProduct.price} INR
          </p>
        )}
        {selectedProduct.discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      <p
        className={`mt-2 text-lg font-medium ${selectedProduct.stock > 0 ? "text-green-600" : "text-red-600"}`}
      >
        {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <div className="mt-4 flex items-center gap-4">
        {selectedProduct.sizes?.length > 0 && (
          <div className="flex items-center gap-2">
            <p className="font-semibold">Sizes:</p>
            {selectedProduct.sizes.map((size, index) => (
              <span key={index} className="px-3 py-1 border rounded-md text-sm">
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">Available Colors</p>
        <div className="flex gap-3 mt-2">
          {selectedProduct.colors.map((color, index) => (
            <span
              className="w-8 h-8 rounded-full border-2 peer-checked:border-black transition-all"
              style={{
                backgroundColor: color.hex,
                borderColor: color.hex,
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">Product Description</p>
        <p className="text-sm text-gray-700 leading-relaxed mt-2 transition-all duration-300">
          {showFullDescription
            ? selectedProduct.description
            : `${selectedProduct.description.slice(0, 300)}...`}
          {selectedProduct.description.length > 300 && (
            <span
              className="text-primary font-semibold cursor-pointer ml-1"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? " Read less" : " Read more"}
            </span>
          )}
        </p>
      </div>
      {selectedProduct.sizeChart && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Size Chart</p>
          <img
            src={selectedProduct.sizeChart}
            alt="Size Chart"
            className="w-full mt-2 rounded-lg border"
          />
        </div>
      )}
      {selectedProduct.video && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Product Video</p>
          <video controls className="w-full mt-2 rounded-lg">
            <source src={selectedProduct.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <button
        className="mt-6 bg-green-500 text-white py-2 px-6 flex items-center gap-2 rounded-md text-lg hover:bg-green-600 transition"
        onClick={() => window.open("https://wa.me/9111222274")}
      >
        <FaWhatsapp size={20} /> Enquire on WhatsApp
      </button>
    </div>
  );
};
const ProductPage = () => {
  const { id } = useParams();
  const { products, isLoading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [imgInd, setImgInd] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((prod) => prod._id === id);
      setSelectedProduct(product);
    }
  }, [products, id]);

  if (isLoading) return <Loader />;
  if (!selectedProduct) return <NoDataFound text={"No product found."} />;

  return (
    <div className="bg-white text-black min-h-screen flex flex-col lg:flex-row px-4 md:px-12 pt-24 gap-10 pb-6">
      <ScrollRestoration />

      {/* Image Gallery */}
      <div className="w-full lg:w-1/2">
        <div className="relative">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            loop={true}
            modules={[Navigation, Pagination]}
            className="w-full"
            ref={swiperRef}
            onSlideChange={(swiper) => setImgInd(swiper.activeIndex)}
          >
            {selectedProduct.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg"
                  src={image}
                  alt={selectedProduct.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex gap-2 mt-4">
          {selectedProduct.images.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer relative w-1/4 transition-all duration-300 ${
                imgInd === index ? "border-2 border-primary scale-105" : ""
              }`}
            >
              <img
                src={image}
                alt="Thumbnail"
                className="w-full h-20 object-cover rounded-lg transition-transform transform hover:scale-110"
                onClick={() => swiperRef.current?.swiper.slideTo(index)}
              />
            </div>
          ))}

          {selectedProduct.images.length > 4 && (
            <div
              className="cursor-pointer relative w-1/4 flex items-center justify-center bg-gray-300 rounded-lg"
              onClick={() => swiperRef.current?.swiper.slideTo(3)}
            >
              <span className="text-black font-semibold text-sm">
                +{selectedProduct.images.length - 3} more
              </span>
            </div>
          )}
        </div>
      </div>
      <ProductDetails
        selectedProduct={selectedProduct}
        setShowFullDescription={setShowFullDescription}
        showFullDescription={showFullDescription}
      />
    </div>
  );
};

export default ProductPage;
