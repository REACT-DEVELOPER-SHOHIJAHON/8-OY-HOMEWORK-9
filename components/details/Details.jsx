"use client";
import { useEffect, useState } from "react";
import { fetchDetailProducts } from "@/utils";
import { useParams } from "next/navigation";
import { BiArrowBack } from "react-icons/bi"; 
import Link from "next/link";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchDetailProducts(id);
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product details", err);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen"><p className="text-center text-lg text-blue-600">Loading...</p></div>;

  return (
    <div className="p-6 max-w-4xl mx-auto relative bg-gradient-to-b from-gray-50 to-blue-200">
      <Link 
        className="flex items-center p-4 bg-indigo-700 text-white rounded-md shadow transition-transform duration-200 transform hover:scale-105 absolute top-4 left-6"
        href="/"
      >
        <BiArrowBack size={24} />
        <span className="ml-2">Back</span>
      </Link>
      {product ? (
        <div className="bg-white rounded-lg shadow-2xl p-6 mt-16 border border-gray-300 transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{product.title}</h1>
          <p className="text-lg text-gray-600 mb-4">Price: 
            <span className="font-bold text-indigo-600 text-xl">{` $${product.price}`}</span>
          </p>
          <img src={product.image} alt={product.title} className="w-full h-80 object-cover rounded-md mb-4 border border-gray-300 shadow-lg" />
          <p className="text-gray-700 my-4">{product.description}</p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-200 hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105">
            Add to cart 
          </button>
        </div>
      ) : (
        <p className="text-center text-lg text-red-600">Product not found</p>
      )}
    </div>
  );
};

export default Details;