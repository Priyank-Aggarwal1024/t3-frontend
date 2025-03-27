import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProductCard({ product }) {
  return (
    <div className="border sm:p-2 p-1 rounded-md shadow-lg max-w-full dark:bg-black bg-white product-small">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        className="rounded-md"
      >
        {product.images &&
          product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={product.name}
                className="w-full aspect-square bg-white object-fill rounded-md"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="text-center mt-1 flex flex-col w-full justify-between">
        <div className="w-full flex sm:flex-row flex-col items-center gap-2 justify-between mt-2">
          <h3 className="sm:text-lg text-sm text-center sm:text-left font-semibold text-black dark:text-white">
            {product.name}
          </h3>
          <div className="flex justify-end gap-2 ">
            {product.discount ? (
              <>
                <span className="text-[#0C8FD7] font-bold">
                  ${product.discount}
                </span>
                <span className="text-gray-400 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-[#0C8FD7] font-bold">${product.price}</span>
            )}
          </div>
        </div>
        <div className="w-full sm:flex hidden items-center justify-between">
          <p
            className={`text-sm font-semibold mt-1 ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </p>
          <Link
            to={`/product/${product._id}`}
            className={`mt-3 px-4 py-2 text-sm font-bold rounded ${
              product.stock > 0
                ? "bg-yellow-500 text-black hover:bg-yellow-600"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? "Shop Now" : "Sold Out"}
          </Link>
        </div>
        <div className="sm:hidden flex justify-end items-center mt-auto">
          <Link to={`/product/${product._id}`}>
            <FaExternalLinkAlt className="text-md dark:text-white text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
