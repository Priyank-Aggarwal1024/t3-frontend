import React from "react";
import { ScrollRestoration, useParams } from "react-router-dom";
import EventCard from "../components/EventCard";
import Loader from "../components/Loader";
import noDataFoundImage from '../assets/hands_black.svg';
import NoDataFound from "../components/NoDataFound";
import useCollections from "../hooks/useCollections";

const Category = () => {
  const { type } = useParams();
  const { collections, isLoading } = useCollections();
  const collection = collections.find((col) => col.name === type);

  return (
    <div className="min-h-screen md:px-12 bg-white dark:bg-darkPrimary mx-auto p-4 relative text-black dark:text-white">
      <ScrollRestoration />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {!collection || collection.products.length === 0 ? (
            <div className="h-[100vh] flex items-center justify-center">
              <NoDataFound image={noDataFoundImage} text={`Sorry, No Products Found in this category!`} />
            </div>
          ) : (
            <>
              <p className="text-xl mb-6 md:text-4xl md:my-12">{type}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2">
                {collection.products.map((product) => (
                  <EventCard event={product} key={product._id} />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
