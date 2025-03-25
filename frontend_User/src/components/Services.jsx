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

  if (isLoading)
    return <p className="text-center text-[#0C8FD7]">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Failed to load services.</p>;

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-3 gap-2 px-6 
                    dark:bg-black text-white transition-all bg-white"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="border dark:border-gray-700 p-6 rounded-sm text-center shadow-md bg-black"
        >
          <div className="flex justify-center mb-3">
            <img
              src={service.icon.asset.url}
              alt={service.title}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400">
            {service.description}
          </p>
          <a
            href={service.link}
            className="text-[#0C8FD7] font-bold mt-3 inline-block text-sm sm:text-base md:text-lg hover:underline"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
