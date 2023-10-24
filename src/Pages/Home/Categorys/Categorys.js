import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Categorys.css";

const Categorys = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <div className="category_items">
            <h3>Apple</h3>
            <ul>
              <li>iPhone 13 Pro Max</li>
              <li>iPhone 13 Pro</li>
              <li>iPhone 13 Mini</li>
              <li>iPhone 12 Pro Max</li>
              <li>iPhone 12 Pro</li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          <div className="category_items">
            <h3>Samsung</h3>
            <ul>
              <li>Samsung S21 Ultra</li>
              <li>Samsung S21</li>
              <li>Samsung 20 Ultra</li>
              <li>Samsung 20</li>
              <li>Samsung S8 Plus</li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          <div className="category_items">
            <h3>Huawei</h3>
            <ul>
              <li>Huawei Nova 8 Pro</li>
              <li>Huawei Nova 8</li>
              <li>Huawei Mate 30 Pro</li>
              <li>Huawei P30 Pro</li>
              <li>Huawei 13 Pro Max</li>
            </ul>
          </div>
        </Col>
        <Col md={3}>
          <div className="category_items">
            <h3>Realme</h3>
            <ul>
              <li>Realme GT Neo</li>
              <li>Realme GT Master</li>
              <li>Realme 13 Pro Max</li>
              <li>Realme 13 Pro Max</li>
              <li>Realme 13 Pro Max</li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Categorys;
