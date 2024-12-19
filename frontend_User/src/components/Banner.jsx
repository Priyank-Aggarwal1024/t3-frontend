import React from "react";
import { Link } from "react-router-dom";
import Loader from './Loader';
import video from '../assets/icehockey.mp4'
import useCollections from "../hooks/useCollections";
import { RxArrowTopRight } from "react-icons/rx";


const Banner = () => {
  const { collections, isLoading, error } = useCollections(); // Use the custom hook

  if (isLoading) {
    return <Loader />; // Display loader while fetching data
  }

  if (error) {
    return <p className="text-red-500">Error fetching collections: {error.message}</p>; // Display error message
  }

  return (
    <div className="">
      <div className="w-full h-screen relative overflow-hidden">
        <img src="https://ik.imagekit.io/foogrshml/unsplash_ZSW4OGXvSSI_new.png?updatedAt=1730410139819" alt="" className="w-full h-full object-cover brightness-75" />
      </div>
      {/* <img src="https://ik.imagekit.io/foogrshml/unsplash_ZSW4OGXvSSI-removebg-preview%201.png?updatedAt=1730434497815" alt="" className="w-full h-screen top-0 object-cover z-50 absolute" /> */}
      <div className="absolute top-28 sm:pl-12 pl-6 text-white">
        <p className="animate-slidein opacity-0 [--slidein-delay:300ms] font-bold ">MADE BY ATHLETES. FOR EVERYONE.</p>
        <h2 className="text-[36px] leading-9 xs:text-[50px] xs:leading-[50px] lg:text-[80px] lg:leading-[80px] md:text-[64px] md:leading-[64px] xl:text-[125px] tracking-wide xl:leading-[125px] text-lightPrimary z-10 font-black sm:mb-4 mb-2 animate-slidein opacity-0 [--slidein-delay:300ms]">WEAR YOUR <br />REASON</h2>
        <p className="flex-wrap md:w-1/2 w-[80%] text-sm mb-4 animate-slidein opacity-0 [--slidein-delay:500ms]">Breaths turn into laps. Jogs turn into marathons. Layups turn into level ups. Wonderful things happen when we benchmark ourselves for growth, triumph and self-actualization. T3 offers a range of ultra-practical designs that enable you to raise the bar for yourself so you can perform at your best while we take care of the rest.</p>

        <Link to="/all-products">
          <button className="bg-white text-sm text-black gap-10 pl-8 pr-2 py-2 rounded-full flex items-center justify-between h2 animate-slidein opacity-0 [--slidein-delay:700ms]">VIEW STORE <span className="bg-black rounded-full p-2"><RxArrowTopRight color="white" /></span></button>
        </Link>
      </div>

      <div className="flex items-center gap-8 absolute xs:right-12 right-6 xs:top-[80vh] top-[85vh]">
        <div className="animate-slidein opacity-0 [--slidein-delay:700ms] text-white">
          <h2 className="xxs:text-7xl text-5xl">200+</h2>
          <p className="text-xs">TOP TIERS AVAILABLE</p>
        </div>
        <div className="animate-slidein opacity-0 [--slidein-delay:700ms] text-white">
          <h2 className="xxs:text-7xl text-5xl">10+</h2>
          <p className="text-xs">STORES PAN INDIA</p>
        </div>
      </div>

      {/* <div className="px-4 md:px-12 my-8 flex gap-4 flex-col">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {collections.length > 0 ? (
            <div className="flex overflow-auto w-full gap-4 md:gap-2">
              <div className="bg-primary dark:text-white p-8 md:flex flex-col rounded-md w-fit">
                <Link to={`/categories`} className="relative">
                  <span>All Collections</span>
                </Link>
              </div>
              {collections.map((item) => (
                <div key={item._id} className="bg-white dark:text-primary p-8 md:flex flex-col rounded-md font-semibold font-poppins w-fit">
                  <Link to={`/collections/${item.name}`} className="relative">
                    <span>{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p>No collections available.</p>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
