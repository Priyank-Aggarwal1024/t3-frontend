import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeBtn from "../components/ThemeBtn";
import useTheme from "../contexts/theme";
import logo from "../assets/t3sports.png";
import logo2 from "../assets/t3sports_dark.png";
import { FiSearch, FiShoppingCart, FiHelpCircle } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import useCategory from "../hooks/useCategory";
import NavbarSearch from "./NavbarSearch";
import { client } from "../utils/sanity/client";

const Navbar = () => {
  const { themeMode } = useTheme();
  const [activeMenu, setActiveMenu] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const { categories } = useCategory();
  const [showSearchPage, setShowSearchPage] = useState(false);
  const renderCategories = (categories, depth = 0) => {
    return categories.map((category) => (
      <div key={category._id} className="relative w-full h-full">
        <Link
          to={`/category/${category._id}`}
          onClick={() => {
            setActiveMenu(null);
            setNavOpen(false);
          }}
          className={`block px-4 py-1 text-white dark:text-black hover:text-[#0C8FD7] dark:hover:text-[#0C8FD7] rounded-md ${
            depth === 0
              ? "text-lg font-bold md:pt-6 pt-4"
              : depth === 1
                ? "text-base "
                : depth === 2
                  ? "text-sm"
                  : "text-xs"
          }`}
        >
          {category.title}
        </Link>

        {/* Recursively Render Children */}
        {category.children && category.children.length > 0 && (
          <div className="w-[100%] bg-black dark:bg-white px-2 py-0 gap-2 group-hover:block">
            {renderCategories(category.children, depth + 1)}
          </div>
        )}
      </div>
    ));
  };
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "offers"]`).then((data) => setOffers(data));
  }, []);
  return (
    <>
      {showSearchPage && <NavbarSearch setShowSearchPage={setShowSearchPage} />}

      <div className="bg-black w-full py-2 max-w-[100vw] lg:block">
        <div className="bg-red-700 text-white text-xs md:text-sm py-2 flex md:flex-nowrap flex-wrap md:gap-4 gap-2 flex-row justify-center items-center md:space-y-0 text-center">
          {offers.map((offer, index) => (
            <div key={index} className="flex items-center md:gap-4 gap-2">
              {offer.link ? (
                <a
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {offer.text}
                </a>
              ) : (
                <span>{offer.text}</span>
              )}
              {index !== offers.length - 1 && (
                <span className="block h-4 w-[1px] bg-gray-300"></span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`bg-white dark:bg-black ${navOpen && "max-md:fixed max-md:z-[100] h-screen top-0 max-md:w-full"}`}
      >
        <header className="flex w-full items-center justify-between p-4 border-b border-t border-gray-200 dark:border-gray-700">
          {!navOpen ? (
            <GiHamburgerMenu
              className="md:hidden sm:text-3xl text-xl dark:text-white text-black cursor-pointer "
              onClick={() => setNavOpen(!navOpen)}
            />
          ) : (
            <RxCross2
              className="md:hidden sm:text-3xl text-xl dark:text-white text-black cursor-pointer "
              onClick={() => setNavOpen(!navOpen)}
            />
          )}

          <Link to={"/"}>
            <img
              src={themeMode === "dark" ? logo : logo2}
              alt="Logo"
              width={150}
              height={40}
              className="md:w-[150px] sm:max-w-[unset] w-[160px] sm:w-[140px] "
            />
          </Link>
          <div className="flex items-center justify-end w-fit md:gap-4 gap-2">
            <div
              className="flex items-center w-fit cursor-pointer"
              onClick={() => setShowSearchPage(!showSearchPage)}
            >
              <FiSearch className="dark:text-white md:font-normal md:text-xl text-xl font-bold " />
            </div>

            <div className="flex items-center md:gap-4 gap-1">
              <Link
                to={"/contact-us"}
                className="flex items-center gap-2 cursor-pointer"
              >
                <p className="dark:text-white text-black md:block hidden ">
                  Support
                </p>
                <FiHelpCircle className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 cursor-pointer" />
              </Link>
              <ThemeBtn />
            </div>
          </div>
        </header>
        <nav
          className={`md:relative  md:h-fit h-screen border-b border-gray-200 dark:border-b-[#0C8FD7] ${navOpen ? "relative max-h-[calc(100vh_-_61px)] overflow-y-auto w-full " : "absolute md:left-0 left-[-100%]"}`}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <div className="flex px-4 md:space-x-8 py-4 max-w-full md:overflow-x-auto md:flex-row flex-col">
            {categories.map((category) => (
              <div
                key={category._id}
                className="group"
                onMouseEnter={() =>
                  window.innerWidth > 768 && setActiveMenu(category._id)
                }
                onClick={() => {
                  window.innerWidth <= 768 &&
                    setActiveMenu(
                      category._id != null && category._id == activeMenu
                        ? null
                        : category._id
                    );
                }}
              >
                {category.children.length > 0 ? (
                  <div
                    className="text-gray-700 cursor-pointer md:w-fit w-full dark:text-gray-300 hover:text-[#0C8FD7] text-start py-2 font-medium relative 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:hidden md:after:block md:after:h-px 
                  after:bg-[#0C8FD7] hover:after:w-full after:transition-all whitespace-nowrap after:duration-500 flex items-center md:justify-start justify-between gap-1"
                  >
                    <p>{category.title}</p>
                    {category.children && category.children.length > 0 && (
                      <>
                        <IoMdArrowDropdown className="md:block hidden" />
                        <MdArrowForwardIos className="md:hidden block" />
                      </>
                    )}
                  </div>
                ) : (
                  <Link
                    to={`/category/${category._id}`}
                    onClick={() => {
                      setActiveMenu(null);
                      setNavOpen(false);
                    }}
                    className="text-gray-700 cursor-pointer md:w-fit w-full dark:text-gray-300 hover:text-[#0C8FD7] text-start py-2 font-medium relative 
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:hidden md:after:block md:after:h-px 
                  after:bg-[#0C8FD7] hover:after:w-full after:transition-all whitespace-nowrap after:duration-500 flex items-center md:justify-start justify-between gap-1"
                  >
                    <p>{category.title}</p>
                    {category.children && category.children.length > 0 && (
                      <>
                        <IoMdArrowDropdown className="md:block hidden" />
                        <MdArrowForwardIos className="md:hidden block" />
                      </>
                    )}
                  </Link>
                )}
                {category.children &&
                  category.children.length > 0 &&
                  activeMenu === category._id && (
                    <div
                      className={`md:absolute top-full mt-[1px] z-[10] left-0 w-[100%] bg-black dark:bg-white border-t shadow-lg p-2 ${
                        activeMenu === category._id ? "block" : "hidden"
                      } `}
                    >
                      {renderCategories(category.children)}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
