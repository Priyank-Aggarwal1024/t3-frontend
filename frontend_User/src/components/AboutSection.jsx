import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-8 lg:px-12 sm:text-center text-left">
      <h2 className="text-xl uppercase tracking-[-0.01em] sm:text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-black pb-4 sm:pb-6">
        ABOUT T3 SPORTS
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto">
        T3 Sports was established in 2019 with the objective of promoting and
        expanding roller sports across India. The company offers high-quality
        equipment from brands such as Bauer, CCM, Sherwood, Labeda, Alkali,
        Fischer, among others.
      </p>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-t3_blue dark:text-t3_blue max-w-5xl mx-auto">
        In 2020, T3 Sports introduced its own sports apparel line to address
        increasing demand. The current product range includes skates, protective
        gear, goalie equipment, and accessories for ice hockey, inline hockey,
        rollball, and other roller sports.
      </p>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 sm:block hidden max-w-5xl mx-auto">
        With a focus on quality and performance, T3 Sports provides athletes and
        enthusiasts with reliable gear designed to ensure safety and enhance
        their sporting experience.
      </p>
    </div>
  );
};

export default AboutSection;
