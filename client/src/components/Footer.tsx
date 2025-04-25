import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 p-4">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* LuxeGems Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">LuxeGems</h2>
          <p>Crafting timeless pieces for life's precious moments.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact</h2>
          <p>123 Jewelry Lane</p>
          <p>New York, NY 10001</p>
          <p>+1 (555) 123-4567</p>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:underline">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8">
        <p>© 2025 LuxeGems. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;