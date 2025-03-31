import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import React, { useEffect, useRef, useState } from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import useProducts from "../hooks/useProducts";
import { FaWhatsapp } from "react-icons/fa";
import NoDataFound from "../components/NoDataFound";
import noSizeChart from "../assets/no-image.png";
import ProductCard from "../components/ProductCard";
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
  const [showSizeChart, setShowSizeChart] = useState(false);
  return (
    <div className="w-full lg:w-1/2 flex flex-col">
      <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-normal flex items-center justify-between">
        <span> {selectedProduct.name}</span>
        <p className="text-sm font-medium block p-1 dark:bg-gray-700 bg-gray-200 rounded-md">
          {selectedProduct.productCode}
        </p>
      </h2>

      <div className="flex items-center gap-2 mt-4">
        <p className="text-xl font-semibold dark:text-white text-black">
          ₹{finalPrice}
        </p>
        {selectedProduct.discount > 0 && (
          <p className="text-lg text-gray-500 line-through">
            ₹{selectedProduct.price}
          </p>
        )}
        {selectedProduct.discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {discountPercentage}% OFF
          </span>
        )}
      </div>
      <p
        className={`mt-2 text-lg font-medium ${selectedProduct.stock > 0 ? "text-green-300" : "text-red-300"}`}
      >
        {selectedProduct.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <div className="mt-4 flex items-center gap-4">
        {selectedProduct.sizes?.length > 0 && (
          <div className="flex items-center gap-2 flex-col ">
            <p className="font-semibold">Sizes:</p>
            {selectedProduct.sizes.map((size, index) => (
              <span key={index} className="px-6 py-2 border rounded-md text-sm">
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="mt-6">
        <p className="text-xl font-semibold">Available Colors: </p>
        <div className="flex gap-3 mt-2">
          {selectedProduct.colors.map((color, index) => (
            <span
              className="w-8 h-8 rounded-full shadow-sm dark:shadow-white shadow-black border-2 peer-checked:border-black transition-all"
              style={{
                backgroundColor: color.hex,
                borderColor: color.hex,
              }}
              key={index}
            ></span>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => setShowSizeChart(true)}
          className="text-white bg-t3_blue py-1 px-2 rounded-md hover:underline cursor-pointer"
        >
          Size Chart
        </button>
        {showSizeChart && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
            onClick={() => setShowSizeChart(false)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
              <img
                src={selectedProduct.sizeChart || noSizeChart}
                alt="Size Chart"
                className="w-[90%] max-h-[90vh] h-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
      <button
        className="mt-6 bg-green-500 text-white py-2 px-6 flex items-center gap-2 rounded-md text-lg hover:bg-green-600 transition"
        onClick={() => window.open("https://wa.me/9111222274")}
      >
        <FaWhatsapp size={20} /> Enquire on WhatsApp
      </button>
      <div className="mt-6">
        <p className="text-xl font-semibold">Product Description</p>
        <p className="text-sm text-gray-700 leading-relaxed mt-2 transition-all duration-300 dark:text-white">
          {showFullDescription
            ? selectedProduct.description
            : `${selectedProduct.description.slice(0, 300)}${selectedProduct.description.length > 300 ? "..." : ""}`}
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

      {selectedProduct.video && (
        <div className="mt-6">
          <p className="text-lg font-semibold">Product Video</p>
          <video controls className="w-full mt-2 rounded-lg">
            <source src={selectedProduct.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
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
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      const product = products.find((prod) => prod._id === id);
      setSelectedProduct(product);
      let suggest = [
        ...products.filter(
          (prod) => prod.category === product.category && prod._id !== id
        ),
        ...products,
      ].slice(0, 6);
      setSuggestions(suggest);
    }
  }, [products, id]);

  if (isLoading) return <Loader />;
  if (!selectedProduct) return <NoDataFound text={"No product found."} />;

  return (
    <>
      <div className="w-full h-full dark:bg-black bg-white">
        <div className="bg-white dark:bg-black lg:max-w-6xl mx-auto dark:text-white text-black min-h-screen flex flex-col justify-center lg:flex-row px-4 md:px-12 lg:pt-16 md:pt-12 pt-10 gap-10 pb-6">
          <ScrollRestoration />

          {/* Image Gallery */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg">
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                navigation
                loop={true}
                modules={[Navigation, Pagination]}
                className="w-full flex items-center justify-center"
                ref={swiperRef}
                onSlideChange={(swiper) => setImgInd(swiper.activeIndex)}
              >
                {selectedProduct.images.map((image, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        className="lg:w-full aspect-square h-[325px] sm:h-[400px] md:h-[450px] object-fill rounded-lg"
                        src={image}
                        alt={selectedProduct.name}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex gap-2 mt-4">
              {selectedProduct.images.slice(0, 3).map((image, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg relative w-1/4 aspect-square transition-all duration-300 ${
                    imgInd === index ? "border-2 border-primary scale-100" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt="Thumbnail"
                    className="w-full h-full object-fill rounded-lg transition-transform transform "
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
        <div className="xl:py-10 py-6 mx-auto xs:px-4 px-2">
          <h2 className="xl:text-4xl uppercase tracking-[-0.01em] text-center lg:text-3xl md:text-2xl text-xl dark:text-white text-black md:pb-6 pb-4">
            You might like
          </h2>

          {suggestions.length > 0 ? (
            <Swiper
              slidesPerView={5}
              breakpoints={{
                1280: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                },
                320: {
                  slidesPerView: 2,
                },
                100: {
                  spaceBetween: 2,
                  slidesPerView: 1,
                },
              }}
              navigation
              loop={true}
              modules={[Navigation, Pagination]}
              className="max-w-6xl mx-auto"
            >
              {suggestions.map((product, index) => (
                <SwiperSlide className="" key={index}>
                  <ProductCard product={product} key={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <NoDataFound text={"No products found"} />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
