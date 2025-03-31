import React, { useEffect, useState } from "react";
import { client } from "../utils/sanity/client";

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const query = `*[_type == "service"] { title, icon{asset->{url}}, description, link }`;
        const data = await client.fetch(query);
        setServices(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (isLoading) return <p className="text-center text-t3_blue">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load services.</p>;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:px-6 px-4 
                    dark:bg-black text-white transition-all bg-[white]"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="border dark:border-gray-700 p-6 rounded-sm text-center shadow-md dark:bg-black bg-t3_blue text-white"
        >
          <div className="flex justify-center mb-3">
            <img
              src={service.icon.asset.url}
              alt={service.title}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
          </div>
          <p className="text-base uppercase sm:text-lg md:text-xl font-semibold text-white">
            {service.title}
          </p>
          <p className="mt-1 text-xs sm:text-base md:text-lg text-pure_white leading-[1] md:leading-tight">
            {service.description}
          </p>
          <a
            href={service.link}
            className="bg-t3_blue py-1 px-2 rounded-md text-pure_white font-bold mt-3 inline-block text-xs sm:text-base md:text-lg hover:underline leading-[1] md:leading-tight"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
