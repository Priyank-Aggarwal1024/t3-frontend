import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, ScrollRestoration } from "react-router-dom";
import AboutSection from "../components/AboutSection";
import BrandsMarquee from "../components/BrandsMarque";
import { client } from "../utils/sanity/client";
import TopSellingProducts from "../components/TopSellingProducts";
import ServicesSection from "../components/Services";
import NewsLetter from "../components/NewsLetter";
import NoDataFound from "../components/NoDataFound";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shopByCategory, setShopByCategory] = useState([]);

  useEffect(() => {
    const fetchShopByCategory = async () => {
      try {
        const query = `
          *[_type == "shopByCategory"]{
            title,
            "imageUrl": image.asset->url,
            _id,
            products[]->{
              name,
              price,
              "imageUrl": images[0].asset->url
            }
          }
        `;
        const data = await client.fetch(query);
        setShopByCategory(data);
      } catch (error) {
        console.error("Error fetching shop by category:", error);
      }
    };

    fetchShopByCategory();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="bg-white w-screen dark:bg-darkPrimary dark:text-white max-w-[100vw]">
        <ScrollRestoration />

        <Banner />
        <div className="max-w-full flex flex-col xl:gap-24 lg:gap-20 md:gap-16 sm:gap-12 gap-10 xl:py-16 md:py-12 py-10">
          <div className="w-full">
            <h2 className="xl:text-4xl uppercase tracking-[-0.01em] text-center lg:text-3xl md:text-2xl text-xl dark:text-white text-black pb-6">
              Shop by Category
            </h2>

            {shopByCategory.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 xs:gap-2 gap-1">
                {shopByCategory.map((category, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square flex items-center justify-center text-white font-bold text-lg cursor-pointer"
                    style={{
                      backgroundImage: `url(${category.imageUrl})`,
                      backgroundSize: "100% 100%",
                      backgroundPosition: "center center",
                    }}
                  >
                    {/* Responsive Aspect Ratio for Better Adaptability */}
                    <div className="absolute inset-0 bg-black/80"></div>

                    <div className="relative z-[4] flex flex-col sm:gap-3 gap-2 items-center text-center sm:p-4 p-2">
                      {/* Title - Adjusts on Small Screens */}
                      <h2 className="sm:mb-1 uppercase tracking-[-0.01em] text-lg md:text-xl lg:text-2xl font-poppins font-bold">
                        {category.title}
                      </h2>

                      {/* CTA Button */}
                      <Link
                        to={`/shop-by-category/${category._id}`}
                        className="bg-t3_blue text-white px-2 sm:px-4 sm:py-2 py-1 text-xs sm:text-sm md:text-base font-bold rounded-md hover:bg-[#44a5da] transition-all duration-300"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <NoDataFound text={"No Data found in Shop By Category"} />
            )}
          </div>
          <TopSellingProducts />
          <BrandsMarquee windowWidth={windowWidth} />
          <AboutSection />
          <ServicesSection />
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
