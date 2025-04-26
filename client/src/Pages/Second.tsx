import React from "react";
import product4 from "@/data/product4"
import Navbar from "@/components/Navbar";
import ImageCarousel from "@/components/Carousel";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
const Second = () => {
    return (
        <div>
            <Navbar />
            <ImageCarousel />
            <br />
            <div className="container mx-auto p-6">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Jewelry Rental @Trending</h1>
                    <p className="text-gray-500">Discover our exquisite rental collection</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {product4.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-bold">{product.name}</h2>
                            <p className="text-gray-500 mt-2">{product.description}</p>
                            <p className="text-lg font-semibold mt-4">${product.price.toFixed(2)}</p>
                            <Link to={`/buy/${product.id}`}>
                                <button className="bg-pink-500 text-white w-full py-2 mt-4 rounded-lg hover:bg-pink-600">
                                    Buy Now
                                </button>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Second;