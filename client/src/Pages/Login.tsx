import React from "react";
import Navbar from "@/components/Navbar";
const Login = () => {
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
                        <form>
                            {/* Email Input */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
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
                                    placeholder="Enter your password"
                                    className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Remember Me and Forgot Password */}
                            <div className="flex items-center justify-between mb-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox text-blue-500"
                                    />
                                    <span className="ml-2 text-gray-700">Remember me</span>
                                </label>
                                <a href="#" className="text-blue-500 text-sm">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Sign In Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                            >
                                Sign In
                            </button>

                            {/* Divider */}
                            <div className="text-center my-4 text-gray-500">OR</div>

                            {/* Social Media Buttons */}
                            <div className="flex space-x-4">
                                <button className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600">
                                    Sign in with Google
                                </button>
                                <button className="flex-1 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">
                                    Sign in with Facebook
                                </button>
                            </div>
                        </form>

                        {/* Sign Up Link */}
                        <p className="text-center text-gray-700 mt-6">
                            Don't have an account?{" "}
                            <a href="#" className="text-blue-500">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;