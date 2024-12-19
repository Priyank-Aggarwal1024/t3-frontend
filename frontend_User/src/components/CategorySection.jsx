import React, { useState, useEffect } from 'react';
import { BiArrowToRight } from 'react-icons/bi';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <>
    <Link to={`/product/${product._id}`}>
      <div className="w-full xs:p-6 p-4 bg-white text-black border border-gray-300 transition-shadow">
        <div className="flex flex-col h-full">
          <h2 className="text-xl md:text-3xl font-medium mb-4 uppercase">{product.name}</h2>
          <div className="relative w-full aspect-square mb-4">
            <img
              src={product?.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-auto space-y-2">
            {/* <p className="text-lg font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p> */}
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {product.category}
              </span>
              <span className={`text-sm ${product.quantity > 0 ? 'text-gray-500' : 'text-red-600'
                }`}>
                {product.quantity > 0 ? `In Stock (${product.quantity})` : 'Out of Stock'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </>
);

const ProductShowcase = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="animate-pulse text-lg text-gray-600">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {/* <Link to="/categories" className="bg-primary flex flex-col justify-between hover:bg-black hover:text-white transition-colors cursor-pointer">
          <h2 className="text-lg font-medium text-white p-6  uppercase">View All Products</h2>
          <div className="mt-auto bg-black">
            <BiArrowToRight className="text-white w-full h-64" />
          </div>
        </Link> */}
      </div>

      {products.length === 0 && !loading && !error && (
        <div className="text-center py-12 text-gray-500">
          No products found
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;