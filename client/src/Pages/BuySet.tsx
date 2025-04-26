import React from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/product";
import { Button } from "@/components/ui/button";
const BuySet = () => {


  const { id } = useParams(); // Extract product ID from URL
  const product = products.find((item) => item.id === parseInt(id)); // Find product by ID

  if (!product) {
    return (
      <div className="text-center p-8">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
        <img
          src={product.productImage}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <ul className="text-gray-600 mb-4">
          {product.description.map((item, i) => (
            <li key={i} className="list-disc list-inside">
              {item}
            </li>
          ))}
        </ul>
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2">
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default BuySet;