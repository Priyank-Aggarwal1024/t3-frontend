import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="border p-2 rounded-md shadow-lg dark:bg-black bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        loop={true}
        navigation
        className="rounded-md bg-white"
      >
        {product.images &&
          product.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="text-center mt-1 flex flex-col w-full justify-between h-[calc(100%_-_230px)]">
        <div className="w-full flex items-center gap-2 justify-between mt-2">
          <h3 className="text-lg text-left font-semibold text-black dark:text-white">
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
        <div className="w-full flex items-center justify-between">
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
      </div>
    </div>
  );
}

export default ProductCard;
