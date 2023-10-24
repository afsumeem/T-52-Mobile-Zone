import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LatestProduct from "../LatestProduct/LatestProduct";

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    fetch("https://mobile-zone.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const condition = "New";

  useEffect(() => {
    if (products.length) {
      const findNewProducts = products.filter(
        (product) => product.condition == condition
      );
      setNewProducts(findNewProducts);
    }
  }, [products]);

  return (
    <div className="products_container">
      <Container>
        <div className="section_title">
          <h2>Latest Products ...</h2>
          <p>Updated with the latest products</p>
        </div>
        <div className="latest_product_box">
          <div className="row gy-4">
            {newProducts.slice(0, 4).map((product) => (
              <LatestProduct key={product.id} product={product}></LatestProduct>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestProducts;
