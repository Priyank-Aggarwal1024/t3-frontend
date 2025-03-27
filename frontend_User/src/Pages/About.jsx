import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white pb-4 text-black dark:text-white dark:bg-darkPrimary px-4 md:px-12 lg:py-12 sm:py-10 py-6">
      <ScrollRestoration />
      <div className="bg-white dark:bg-black text-black dark:text-white px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-black pb-4 sm:pb-6">
          ABOUT T3 SPORTS
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto">
          T3 Sports was founded in 2019 by three passionate individuals driven
          by the goal of promoting and expanding roller sports across India.
          Recognizing the growing enthusiasm for skating and hockey-related
          activities, we embarked on a mission to deliver high-quality equipment
          and gear from internationally acclaimed brands. Our partnerships
          include prominent names such as Bauer, CCM, Sherwood, Labeda Wheels,
          Sonic Sports, Alkali, Fischer Hockey, Tour, Warrior, and Ace Sports
          etc.
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#0C8FD7] dark:text-[#0C8FD7] max-w-5xl mx-auto">
          In 2020, in response to increasing customer demand and to provide
          comprehensive solutions to sports enthusiasts, T3 Sports launched its
          own range of sports apparel. Today, we proudly serve customers
          throughout India, offering an extensive selection of products tailored
          to meet diverse sporting needs. Our inventory includes a complete
          range of roller skates, protective gear, goalie equipment, and various
          accessories catering specifically to ice hockey, inline hockey,
          rollball, and other roller sports disciplines.
        </p>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto">
          At T3 Sports, we are committed to supporting athletes and recreational
          users alike by ensuring access to reliable, innovative, and
          high-performance sporting goods. Our mission continues to be centered
          around elevating the standards of roller sports in India, enabling
          individuals at every level to achieve their best and enjoy their
          sporting experiences safely and comfortably.
        </p>
      </div>
    </div>
  );
};

export default About;
