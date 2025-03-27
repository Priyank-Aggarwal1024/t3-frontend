import React, { useEffect, useRef, useState } from "react";
import { client } from "../utils/sanity/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { GrPrevious, GrNext } from "react-icons/gr";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const swiper = useRef();
  const fetchBanners = async () => {
    try {
      const data = await client.fetch(`*[_type == "banner"]{
  large{asset->{url}},
  small{asset->{url}},
  link,
  buttonText
}`);
      setBanners(data);
    } catch (error) {
      console.error("Error fetching banners:", error);
      setBanners([]);
    }
  };
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <div className="w-screen relative max-w-screen md:h-[calc(100vh_-_202px)] h-[calc(100vh_-_133px)]">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-4xl dark:text-[#0C8FD7] z-[3]"
        onClick={() => swiper.current?.swiper?.slidePrev()}
      >
        <GrPrevious />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-4xl dark:text-[#0C8FD7] z-[3]"
        onClick={() => swiper.current?.swiper?.slideNext()}
      >
        <GrNext />
      </button>
      <Swiper
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full max-w-full h-full"
        modules={[Autoplay]}
        ref={swiper}
      >
        {banners && banners.length > 0 ? (
          banners.map((banner, index) => (
            <SwiperSlide key={index} className="relative max-w-full">
              <img
                src={
                  width < 760
                    ? banner.small?.asset?.url
                    : banner.large?.asset?.url
                }
                className="w-full h-full"
              />
              <div className="w-full absolute  top-0 z-[2] h-full flex items-end justify-end bg-black bg-opacity-0">
                {banner.buttonText && banner.link && (
                  <a
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-white bg-transparent backdrop-blur-xl border rounded-lg shadow-md transition md:mr-12 mr-4 md:mb-12 mb-8"
                  >
                    {banner.buttonText}
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center mt-10 text-gray-500">Loading banners...</p>
        )}
      </Swiper>
    </div>
  );
};

export default Banner;
