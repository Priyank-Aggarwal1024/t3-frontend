import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProductCard({ product, onClick }) {
  return (
    <Link
      to={`/product/${product._id}`}
      className="block sm:p-2 p-1 rounded-md max-w-full bg-transparent product-small"
      onClick={onClick}
    >
      {product.images && product.images.length > 0 && (
        <div className="w-full bg-white dark:bg-black rounded-md">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full aspect-square bg-pure_white object-fill sm:rounded-md rounded-none"
          />
        </div>
      )}
      <div className="text-left sm:mt-3 mt-2 flex flex-col w-full justify-between items-left">
        <p className="sm:text-lg text-sm text-left font-semibold text-black dark:text-white truncate">
          {product.name}
        </p>
        {product.discount ? (
          <div className="flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="dark:text-pure_white text-black font-bold">
                ₹{product.discount}
              </span>
              <span className="text-red-300 line-through text-sm font-bold">
                ₹{product.price}
              </span>
            </div>
            {product.discount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-1 py-1 rounded-sm">
                {Math.round(
                  ((product.price - product.discount) / product.price) * 100
                )}
                % OFF
              </span>
            )}
          </div>
        ) : (
          <span className="text-t3_blue font-bold">₹{product.price}</span>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
