import React from "react";
import Banner from "../Banner/Banner";
import BestNewItems from "../BestNewItems/BestNewItems";
import FeaturedProducts from "../FeaturedProduct/FeaturedProducts/FeaturedProducts";
import LatestProducts from "../LatestProducts/LatestProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestNewItems></BestNewItems>
            <LatestProducts></LatestProducts>
            <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;
