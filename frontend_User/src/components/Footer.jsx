import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/t3sports_dark.png";

function Footer() {
  return (
    <footer className={`bg-white text-black z-20 w-full`}>
      <div className=" sm:p-8 p-4 bg-white flex w-full justify-between items-baseline lg:flex-row flex-col gap-6">
        <div className="my-4 flex items-center">
          <img src={logo} width={350} alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left lg:w-1/2 w-full">
          <div>
            <h4 className="text-md font-medium ">Our Websites</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1 "}>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/"}
              >
                Home
              </Link>

              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/all-products"}
              >
                All Products
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/all-category"}
              >
                All Category
              </Link>
              <Link
                to="/Search"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Search Product
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium ">About us</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1 "}>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/about"}
              >
                About
              </Link>

              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/contact-us"}
              >
                Help & Support
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/faq"}
              >
                Frequently Asked Questions
              </Link>
              <Link
                to="/why-choose-us"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Why Choose Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-md font-medium ">Help</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1"}>
              <a
                href="https://odrtrk.live"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Track your order
              </a>
              <Link
                to="/contact-support"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Submit Feedback
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/contact-us"}
              >
                Help & Support
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-md font-medium ">Privacy & Legal</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1"}>
              <Link
                to="/shipping-policy"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Shipping Policy
              </Link>
              <Link
                to="/policy"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-condition"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <hr className="border-gray-300" />
      <div className="my-2 flex justify-between px-8">
        <p className="text-xs opacity-50">©2024 T3Sports Inc.</p>
        <p className="text-xs opacity-50">
          Designed by{" "}
          <a href="https://elanine.com" className="underline">
            Elanine Creatives
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
