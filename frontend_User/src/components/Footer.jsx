import React from "react";
import { Link } from "react-router-dom";
import { TeenyiconsInstagramSolid } from "../icons/InstagramSolid";
import { StreamlineMetaSolid } from "../icons/MetaLogoFill";
import { Fa6BrandsSquareXTwitter } from "../icons/XTwitter";
import logo from "../assets/t3sports_dark.png";

function Footer() {
  return (
    <footer
      className={`bg-white text-black z-20 w-full`}
    >
      <div className=" sm:p-8 p-4 bg-white flex w-full justify-between items-baseline lg:flex-row flex-col gap-6">
        <div className="my-4 flex items-center">
          <img src={logo} width={350} alt="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left lg:w-1/2 w-full">
          <div>
            <h4 className="text-md font-medium ">For Users</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1 "}>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/about"}
              >
                About
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/blogs"}
              >
                Blogs
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/account"}
              >
                Account
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
            <h4 className="text-md font-medium ">For Products</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1"}>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/sign-up"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/sign-in"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </Link>
              <Link
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
                to={"/subscription"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscription
              </Link>
              <Link
                to="/contact-support"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Submit Feedback
              </Link>
            </div>
          </div>


          <div>
            <h4 className="text-md font-medium">Resources</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1 "}>
              <Link
                to="/blogs"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Blogs
              </Link>
              <Link
                to="/contact-us"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Contact
              </Link>
              <Link
                to="/tnc"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Privacy Policy
              </Link>
            </div>
          </div>




          <div>
            <h4 className="text-md font-medium ">Company</h4>
            <div className={"mt-4 lg:mb-0 text-xs flex flex-col space-y-1"}>
              <Link
                to="/about"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Careers
              </Link>
              <Link
                to="/press"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Press
              </Link>
              <Link
                to="/partners"
                className="opacity-50 hover:text-primary hover:opacity-100 transition-all duration-300 ease-in-out"
              >
                Partners
              </Link>

            </div>
          </div>
          {/* <div>
          <div
            className={
              "mt-4 lg:mb-0 text-xs flex flex-col space-y-1 opacity-50"
            }
          >
            <Link to="/">© 2024 T3Sports All rights reserved.</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div> */}

          <div>
            {/* <ul className="list-unstyled  gap-4 flex justify-end">
            <li>
              <Link
                className=" mt-1  0 font-semibold  pb-1 text-sm"
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className=" mt-1  0 font-semibold  pb-1 text-sm"
                to="/sign-up"
              >
                Sign up
              </Link>
            </li>

            <li>
              <button onClick={scrollToTop} className="focus:outline-none">
                <FaArrowCircleUp className=" text-custom-active text-3xl hover:text-teal-400 transition duration-300" />
              </button>
            </li>
          </ul> */}

            {/* <div className="text-right  mt-4 lg:mt-2 lg:text-center">
            <div className="text-sm  font-semibold ">
              <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
          </div> */}
          </div>
        </div>

      </div>
      <hr className="border-gray-300" />
      <div className="my-2 flex justify-between px-8">
        <p className="text-xs opacity-50">©2024 T3Sports Inc.</p>
        <p className="text-xs opacity-50">Designed by <a href="https://elanine.com" className="underline">Elanine Creatives</a></p>
      </div>
    </footer>
  );
}

export default Footer;
