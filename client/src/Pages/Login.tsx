import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/user/saveUser", formData);
      alert(response.data.message);
      navigate("/"); // Redirect to the home screen after successful submission
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };


  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 h-[95vh]">
        {/* Left Section */}
        <div className="relative bg-gradient-to-br from-pink-300 via-purple-200 to-purple-400 flex items-center justify-center">
          <div className="text-center px-4">
            <img
              src="img.png"
              alt="Luxury Rings"
              className="rounded-md shadow-lg m-4 h-[75vh]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Please sign in to your account
            </p>
            <form onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;