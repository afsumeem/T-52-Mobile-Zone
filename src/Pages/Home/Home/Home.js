import React from "react";
import Banner from "../Banner/Banner";
import BestNewItems from "../BestNewItems/BestNewItems";
import LatestProducts from "../LatestProducts/LatestProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BestNewItems></BestNewItems>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;
