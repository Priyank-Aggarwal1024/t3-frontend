// import React from 'react'
// import useCollections from '../hooks/useCollections'

// const CollectionSection = () => {
//     const { collections, loading, error} = useCollections();
//   return (
//     <div>
//         <div className='grid grid-cols-1 md:grid-cols-2'>
//             {collections.map((collection, index) => {
//                 return(
//                     <>
//                         <div key={index} className='w-full h-full relative'>
//                             <img src='https://assets.lummi.ai/assets/QmRXtQ9njVU6RHsNKQ4qJ32VZ2grshTKXpzXj6XeXqTfHs?auto=format&w=1500' alt='' className='w-full h-full bg-cover' />
//                             <p className='text-3xl absolute top-4 left-4'>{collection.name}</p>
//                         </div>
//                     </>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default CollectionSection




import React from 'react';
import useCollections from '../hooks/useCollections';
import { Link } from 'react-router-dom';

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

const CollectionSection = () => {
  // const {collections, loading, error} = useCollections();
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {collections.map((collection, index) => (
          <Link to={`/collections/${collection.name}`} key={index}>
            <div
              key={index}
              className="relative aspect-square overflow-hidden group"
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 z-10" />

              {/* Image */}
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                {/* Title */}
                <h2 className="text-white text-2xl md:text-3xl font-semibold">
                  {collection.name}
                </h2>

                {/* Description and Button */}
                <div className="space-y-4">
                  <p className="text-white text-sm md:text-base">
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;