import React from "react";
import nodata from "../assets/no_data.png";
import nodatablack from "../assets/hands_black.svg";
const NoDataFound = ({ text }) => {
  return (
    <div className="dark:bg-black bg-white py-6">
      <p className="text-center dark:text-white text-black gap-4 flex flex-col text-md justify-center items-center">
        <img src={nodata} alt="" className="w-36 h-36 block dark:invert" />{" "}
        {text}
      </p>
    </div>
  );
};

export default NoDataFound;
