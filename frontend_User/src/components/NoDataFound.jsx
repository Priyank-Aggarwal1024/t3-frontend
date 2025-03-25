import React from "react";
import nodata from "../assets/hands.svg";
import nodatablack from "../assets/hands_black.svg";
const NoDataFound = ({ text }) => {
  return (
    <div className="dark:bg-black bg-white py-6">
      <p className="text-center dark:text-white text-black gap-4 flex flex-col text-md justify-center items-center">
        <img src={nodata} alt="" className="w-36 h-36 dark:block hidden" />{" "}
        <img src={nodatablack} alt="" className="w-36 h-36 dark:hidden block" />{" "}
        {text}
      </p>
    </div>
  );
};

export default NoDataFound;
