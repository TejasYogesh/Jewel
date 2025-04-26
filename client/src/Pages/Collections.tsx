import React from "react";
import { products } from "@/data/product";
import Navbar from "@/components/Navbar";
const Collections = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-md rounded-md p-4">
                        <img
                            src={product.productImage}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-bold mt-4">{product.title}</h2>
                        <ul className="mt-2 text-gray-600">
                            {product.description.map((item, i) => (
                                <li key={i} className="list-disc list-inside">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Collections;