import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AllProducts from "../AllProducts/AllProducts";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);

  useEffect(() => {
    fetch("https://mobile-zone.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, [manageProducts]);

  return (
    <Container fluid>
      <Row className="mt-5">
        {manageProducts.map((product) => (
          <AllProducts key={product._id} product={product}></AllProducts>
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
