import React from 'react'
// import Navbar from '@/components/Navbar';
import { products2 } from '@/data/products2';
export default function Category() {
  return (
    <div>
           <div>
            
            <div className="p-6">
                {/* Search Bar */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold mb-4">Find Your Perfect Jewelry</h1>
                    <input
                        type="text"
                        placeholder="Search for jewelry..."
                        className="w-full max-w-lg p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                {/* Browse by Category */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Browse by Category
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {products2.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg p-4 text-center"
                            >
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="text-xl font-semibold">{category.name}</h3>
                                <p className="text-gray-500 mt-2">{category.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
