import React from "react";
import { Button } from "./ui/button";
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src="Frame.png" alt="" className="m-2" />
                    <span className="text-blue-600 text-xl font-bold">JewelCraft</span>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-10">
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Home
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Collections
                    </a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        About
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Services
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Customize Jewellery Design
                    </a>

                    <a href="#" className="text-gray-700 hover:text-blue-600">
                        Rental a Jewellery Design
                    </a>

                </div>

                {/* Icons Section */}
                <div className="flex items-center space-x-4">
                    <Button className="bg-blue-600 text-white rounded hover:bg-blue-700 rounded-2xl">
                        Shop now
                    </Button>
                    <button className="text-gray-700 hover:text-blue-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </button>
                    <button className="text-gray-700 hover:text-blue-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h18l-1 14H4L3 3zm3 4h12m-6 4v6"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;