import React from "react";
// import { products2 } from "@/data/products2";
import Navbar from "@/components/Navbar";
import Category from "./Category";
import Parts from "./Parts"
import Footer from "@/components/Footer";
import  ImageCarousel  from "@/components/Carousel";
const Home = () => {
    return (
        <div>
            <Navbar />
            <ImageCarousel />
            <br />
            <Category />
            <br />
            <Parts />
            <br />
            <Footer />

        </div>
    );
};

export default Home;