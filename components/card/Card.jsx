"use client";
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Card = ({ product }) => {
  return (
    <Link 
      href={`/details/${product.id}`} 
      className="bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl overflow-hidden max-w-md hover:scale-105 transition-transform duration-300 m-6 w-[350px]"
    >
      <Image 
        src={product.image} 
        alt={product.title}
        width={400} 
        height={240} 
        className="h-56 object-contain transition-transform duration-300 hover:scale-110 rounded-t-2xl" 
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-wider">
          {product.title}
        </h2>
        <p className="text-xl text-gray-700 font-semibold">
          Price: <span className="text-pink-600">${product.price}</span>
        </p>
      </div>
    </Link>
  );
};

export default Card;
