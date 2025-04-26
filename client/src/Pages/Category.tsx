import React from "react";
import { motion } from "framer-motion";
import { products2 } from "@/data/products2";

export default function Category() {
  return (
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
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, staggerChildren: 0.2 },
              },
            }}
          >
            {products2.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-2 text-center hover:shadow-lg cursor-pointer "
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <motion.img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-all duration-200 ease-in-out"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <h3 className="text-xl font-semibold">{category.name}</h3>
                <p className="text-gray-500 mt-2">{category.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}