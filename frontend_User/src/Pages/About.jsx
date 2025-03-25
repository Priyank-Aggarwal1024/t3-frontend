import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white pb-4 text-black dark:text-white dark:bg-darkPrimary px-4 md:px-12 pt-20">
      <ScrollRestoration />
      <div className="dark:bg-darkPrimary pb-8 bg-white text-black dark:text-white flex md:gap-10 gap-6 flex-col items-center justify-center">
        <h2 className="px-4 text-xl md:text-3xl font-light tracking-wide">
          <span className="font-bold leading-tight text-[#0C8FD7]">
            T3 Sports
          </span>{" "}
          <span className="opacity-90">
            was established in 2019 with the objective of promoting and
            expanding roller sports across India. The company offers
            high-quality equipment from brands such as Bauer, CCM, Sherwood,
            Labeda, Alkali, fischer among others.
          </span>
        </h2>
        <h2 className="px-4 text-xl md:text-3xl font-light tracking-wide">
          <span className="opacity-90">
            In 2020, T3 Sports introduced its own sports apparel line to address
            increasing demand. The current product range includes skates,
            protective gear, goalie equipment, and accessories for ice hockey,
            inline hockey, rollball, and other roller sports.
          </span>
        </h2>
        <h2 className="px-4 text-xl md:text-3xl font-light tracking-wide">
          <span className="opacity-90">
            With a focus on quality and performance, T3 Sports provides athletes
            and enthusiasts with reliable gear designed to ensure safety and
            enhance their sporting experience.
          </span>
        </h2>
      </div>
    </div>
  );
};

export default About;
