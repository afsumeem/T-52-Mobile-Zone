import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Categorys.css'

const Categorys = () => {
    return (
        <div>
            <Row>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Apple</h3>
                        <ul>
                            <li><a href="#">iPhone 13 Pro Max</a></li>
                            <li><a href="#">iPhone 13 Pro</a></li>
                            <li><a href="#">iPhone 13 Mini</a></li>
                            <li><a href="#">iPhone 12 Pro Max</a></li>
                            <li><a href="#">iPhone 12 Pro</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Samsung</h3>
                        <ul>
                            <li><a href="#">Samsung S21 Ultra</a></li>
                            <li><a href="#">Samsung S21</a></li>
                            <li><a href="#">Samsung 20 Ultra</a></li>
                            <li><a href="#">Samsung 20</a></li>
                            <li><a href="#">Samsung S8 Plus</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Huawei</h3>
                        <ul>
                            <li><a href="#">Huawei Nova 8 Pro</a></li>
                            <li><a href="#">Huawei Nova 8</a></li>
                            <li><a href="#">Huawei Mate 30 Pro</a></li>
                            <li><a href="#">Huawei P30 Pro</a></li>
                            <li><a href="#">Huawei 13 Pro Max</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="category_items">
                        <h3>Realme</h3>
                        <ul>
                            <li><a href="#">Realme GT Neo 2</a></li>
                            <li><a href="#">Realme GT Master</a></li>
                            <li><a href="#">Realme 13 Pro Max</a></li>
                            <li><a href="#">Realme 13 Pro Max</a></li>
                            <li><a href="#">Realme 13 Pro Max</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Categorys;