import React from "react";
import { products } from "@/data/product";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Collections = () => {

    const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();
    useEffect(() => {
        // Simulate a 3-second loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);


    return (
        <div>
            <Navbar />

            <div className="m-8 text-center">
                <p className="text-4xl">Shop by Events</p>
                <p className="text-md">Offer limited to only till 27/04/2025</p>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
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
                                <Link to={`/buyset/${product.id}`}>
                                    <Button className="my-4 w-full bg-pink-500 hover:bg-pink-600 text-white">
                                        Buy set
                                    </Button>
                                </Link>

                            </ul>
                        </div>
                    ))}
                </div>
            )}

            <Footer />
        </div>

    );
};

export default Collections;