import React from "react";
import { Button } from "react-bootstrap";

const ProductsInfo = ({ product }) => {
  const { name, brand, price, picture, display, camera, battery } = product;
  return (
    <div className="my-3">
      <div className="d-flex rounded  py-4">
        <div className="col-lg-5">
          <img className="w-100" src={picture} alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className=" col-lg-6 d-flex flex-column justify-content-center col-sm-12 text-start ">
          <div>
            <h4 className="brand ">{brand}</h4>
            <h2 className="link_style py-2">{name}</h2>
            <h4>Price: ${price}</h4>
            <p>{display}</p>
            <p>{camera}</p>
            <p>{battery}</p>
            <Button className="btn_regular" variant="primary">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
