import React, { useEffect, useState } from "react";
import ProductsInfo from "./ProductsInfo";

const DetailsProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://mobile-zone.onrender.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div style={{ backgroundColor: "rgb(255, 223, 228)" }}>
            <div className="  container">
                <h1 style={{ color: "rgb(243, 44, 77)" }} className="pt-5 ">
                    Our Product Info
                </h1>
                <div className="row ">
                    {products.slice(0, 1).map((product) => (
                        <ProductsInfo key={product.id} product={product}></ProductsInfo>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;
