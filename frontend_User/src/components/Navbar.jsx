import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { BiSolidSearch } from "react-icons/bi";
import { PiSmileySadThin } from "react-icons/pi";
import ThemeBtn from "../components/ThemeBtn";
import useTheme from "../contexts/theme";
import useProducts from "../hooks/useProducts";
import logo from '../assets/t3sports.png';
import logo2 from '../assets/t3sports_dark.png';

const Navbar = () => {
  const { themeMode } = useTheme();
  const searchRef = useRef(null);
  const { products } = useProducts();
  const [searchText, setSearchText] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const closeSearchBar = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
        setSearchText("");
      }
    };

    document.addEventListener("click", closeSearchBar);
    return () => {
      document.removeEventListener("click", closeSearchBar);
    };
  }, [searchRef]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredProducts = products
    ? products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()) ||
        product.category.toLowerCase().includes(searchText.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchText.toLowerCase()) ||
        product.description.toLowerCase().includes(searchText.toLowerCase())
    )
    : [];

  return (
    <nav className="p-2 py-4 bg-transparent fixed top-0 w-full z-40">
      <div className="px-2 md:px-12 py-4 flex justify-center items-center">
        {/* Logo */}
        <div className="">
          <Link to="/">
            <img
              src={isHomePage ? logo : logo2}
              width={120}
              alt="logo"
              className="mix-blend-difference"
            />
          </Link>
        </div>

        {/* Items based on search */}
        {/* {searchOpen && searchText !== "" && (
          <div className="flex flex-col border border-black dark:border-primary no-scrollbar absolute top-20 md:w-3/4 w-11/12 -translate-x-1/2 left-1/2 overflow-y-auto z-50 rounded-md max-h-[60vh]">
            {filteredProducts.length === 0 ? (
              <div className="bg-white dark:bg-darkPrimary p-4 text-black dark:text-primary rounded-md">
                <p className="text-center flex flex-col justify-center items-center gap-4">
                  <PiSmileySadThin size={100} /> Sorry, we couldn't find the product you're looking for!
                </p>
              </div>
            ) : (
              <div className="bg-white dark:bg-darkPrimary p-4 text-black dark:text-white rounded-md">
                <p className="text-xs my-4">Search Results</p>
                <div className="flex flex-col md:flex-row gap-2">
                  {filteredProducts.map((product) => (
                    <div
                      key={product._id}
                      className="bg-white relative dark:bg-darkPrimary flex flex-col w-full md:w-1/3 gap-2 text-black dark:text-white hover:bg-black hover:text-white rounded-md p-2"
                    >
                      <img
                        className="w-full h-auto aspect-square object-cover rounded-md"
                        src={product.image}
                        alt={product.name}
                      />
                      <Link to={`product/${product._id}`}>
                        <h2 className="text-sm md:text-lg line-clamp-1 w-full">
                          {product.name}
                        </h2>
                        <hr />
                        <p className="text-xs mt-2 line-clamp-3">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs mt-2">
                            ${product.price}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )} */}
        {/* 
        <div className="flex gap-2 row-start-1 col-start-2 justify-end">
          <div className="flex justify-center w-fit items-center md:flex-row flex-col md:gap-0 gap-4 ">
            <div
              className="flex relative items-center rounded-md w-fit md:w-full"
              ref={searchRef}
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="text-xs md:text-sm block flex-1 focus:outline-primary dark:focus:outline-primary rounded-md py-3 pl-4 md:placeholder:text-black bg-transparent backdrop-blur-md placeholder:text-black placeholder:dark:text-white placeholder:text-xs focus:right-0 font-poppins sm:text-sm sm:loading-6"
                value={searchText}
                onChange={handleSearchChange}
                onClick={toggleSearchBar}
              />
              <div
                className="absolute p-2 rounded-md cursor-pointer right-0 mr-2 dark:text-white text-black"
                onClick={() => (searchText ? setSearchText("") : toggleSearchBar())}
              >
                {searchText ? (
                  <AiOutlineClose size={15} />
                ) : (
                  <BiSolidSearch size={15} />
                )}
              </div>
            </div>
          </div>
          <ThemeBtn />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
