import React from "react";
import { ScrollRestoration } from "react-router-dom";

const About = () => {
  return (
    <div className='bg-white pb-4 text-black dark:text-white dark:bg-darkPrimary px-4 md:px-12'>
      <ScrollRestoration/>
    {/* <div className="min-h-screen flex items-center justify-center bg-white  text-black ">
      <div className="max-w-3xl bg-white p-8 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold text-center  mb-4">About Our Event Listing</h1>
        <p className="text-lg  leading-relaxed">
          Welcome to our event listing web app! We're passionate about bringing you the best events in town. Whether you're looking for concerts, festivals, conferences, or workshops, we've got you covered.
        </p>
        <p className="text-lg text-primary  leading-relaxed mt-4">
          Our mission is to make it easy for you to discover and attend events
          that match your interests. With our intuitive search and filtering
          options, you can quickly find the perfect event for you.
        </p>
        <p className="text-lg text-primary  leading-relaxed mt-4">
          We're constantly updating our database to ensure you have access to
          the latest events happening in your area. Have a suggestion or
          feedback? We'd love to hear from you!
        </p>
      </div>
    </div> */}
    <div>
      <img className='w-full cursor-pointer h-[80vh] object-cover brightness-50' src='https://assets.lummi.ai/assets/QmaPP2SER5UxXLQ8VwTbQTiRmZTf1owmDWMfbnQK76Y6Gz?auto=format&w=1500' alt='...' />
      <div className='absolute text-4xl md:text-6xl font-bold text-center font-poppins text-white -translate-x-1/2 left-1/2 top-1/2 md:w-[60vw] -translate-y-1/2'>
        Your Wish Our Command!
      </div>
    </div>
    <div className='dark:bg-darkPrimary bg-white text-black dark:text-white h-96 flex items-center justify-center'>
      <h2 className='text-center px-4 text-xl md:text-3xl font-semibold'>T3Sports empowers local businesses by providing a user-friendly platform for regional advertising. We connect small enterprises with their target audience, boosting visibility and sales. Our focused approach simplifies marketing, making it easy for businesses to thrive in their communities.</h2>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-between'>
      <div className='relative w-full'>
        <img className='w-full cursor-pointer h-72 object-cover' src='https://assets.lummi.ai/assets/QmYud6upcfUiLE5k2CxhAptysswb4x4kZ428T9rcUvKPuG?auto=format&w=1500' alt='' />
        <h2 className='absolute text-xl md:text=6xl font-bold text-center bg-white/50 backdrop-blur-md rounded-md px-4 py-2 font-poppins text-black -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2'>
        Simplify 
      </h2>
      </div>
      <div className='relative w-full'>
        <img className='w-full cursor-pointer h-72 object-cover' src='https://assets.lummi.ai/assets/QmWpzFiZq6McmyX3mC1y62Y4Cf378n8Pru3d4wsngiUpmW?auto=format&w=1500' alt='' />
        <h2 className='absolute text-xl md:text=6xl font-bold text-center bg-white/50 backdrop-blur-md rounded-md px-4 py-2 font-poppins text-black -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2'>
        Connect
      </h2>
      </div>
      <div className='relative w-full'>
        <img className='w-full cursor-pointer h-72 object-cover' src='https://assets.lummi.ai/assets/QmSrSt5TdJ9L49sgLPTkbMQe55iayaatfWKuhr5dhksC2y?auto=format&w=1500' alt='' />
        <h2 className='absolute text-xl md:text=6xl font-bold text-center bg-white/50 backdrop-blur-md rounded-md px-4 py-2 font-poppins text-black -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2'>
        Grow 
      </h2>
      </div>
    </div>
    </div>
  );
};

export default About;
