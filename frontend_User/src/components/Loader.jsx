import React from "react";

const Loader = () => {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="loader-line-container">
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader;