import React from "react";
import { useParams } from "react-router-dom";
import product4 from "@/data/product4"

const BuyNow = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = product4.find((item) => item.id === parseInt(id)); // Find the matching product

  if (!product) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
        <button className="bg-pink-500 text-white w-full py-2 rounded-lg hover:bg-pink-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default BuyNow;