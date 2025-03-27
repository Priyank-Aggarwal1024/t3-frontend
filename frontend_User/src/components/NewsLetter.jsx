"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper/modules";
import { FaInstagram, FaYoutube, FaShippingFast } from "react-icons/fa";
import { client } from "../utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source).url();
}
const NewsLetter = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    client.fetch('*[_type == "newsletterSection"][0]').then((res) => {
      setData(res);
    });
  }, []);
  if (!data) return <div></div>;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Autoplay]}
        className="my-4"
      >
        {data.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={urlFor(image.asset._ref)}
              alt={`Slide ${index}`}
              className="w-full h-80 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="px-6 py-8 text-center flex flex-col md:flex-row items-center justify-between">
        <div className="mt-6 md:mt-0 mx-auto">
          <h2 className="text-xl tracking-widest md:text-2xl font-bold">
            SEE WHAT WE'RE UP TO:
          </h2>
          <div className="flex gap-4 justify-center mt-2">
            {data.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-2xl text-black dark:text-white"
              >
                {link.platform === "YouTube" ? <FaYoutube /> : <FaInstagram />}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="https://odrtrk.live"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 
  rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white
  transform hover:scale-105 transition-all duration-300 shadow-md
  relative overflow-hidden group"
        >
          <FaShippingFast className="text-xl group-hover:animate-bounce" />
          <span className="font-semibold">Track Your Order</span>
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
