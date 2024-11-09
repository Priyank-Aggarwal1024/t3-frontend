import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../components/Loader';
import useCollections from "../hooks/useCollections";


const AllCategories = () => {
  // const { collections, isLoading, error } = useCollections();

  // if (isLoading) {
  //   return <Loader />; // Display loader while fetching data
  // }

  // if (error) {
  //   return <p className="text-red-500">Error fetching collections: {error.message}</p>; // Display error message
  // }

  const collections = [
    {
      name: "Sipper",
      description: "Utilizing eco-friendly materials and recycling can help create longer-lasting products while reducing environmental impact",
      image: "https://images.unsplash.com/photo-1632649178112-b66494410620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWhvY2tleXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Rollball",
      description: "Nanotechnology enables the development of materials with high strength, durability, and conductivity",
      image: "https://images.unsplash.com/photo-1632649178028-1bb719f615c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aWNlaG9ja2V5fGVufDB8fDB8fHww"
    },
    {
      name: "Blades",
      description: "Advanced aerodynamic shapes to reduce air resistance during a player's strokes",
      image: "https://images.unsplash.com/photo-1632570700553-2ee85fe474d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlaG9ja2V5fGVufDB8fDB8fHww"
    }
  ];

  return (
    <div className="dark:bg-darkPrimary bg-white flex pt-24 flex-wrap">
      {collections.map((collection, catIndex) => (
        <div key={catIndex} className="w-1/3 relative">
          <Link to={`/collections/${collection.name}`}>
          <h2 className="text-2xl font-bold text-white absolute top-4 left-4 uppercase">{collection.name}</h2>
          <img src={collection.image} alt="" className="w-full h-full object-cover" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllCategories;
