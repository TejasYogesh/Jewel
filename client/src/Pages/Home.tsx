import React from "react";
// import { products2 } from "@/data/products2";
import Navbar from "@/components/Navbar";
import Category from "./Category";
import Parts from "./Parts"
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
const Home = () => {
    const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/home");
  }, []);
    return (
        <div>
            <Navbar />
            <ImageCarousel />
            <br />
            <Category />
            <br />
            <Parts />
            <br />
            <Button className="m-8 p-4">Logout</Button>
            <br />
            <Footer />

        </div>
    );
};

export default Home;