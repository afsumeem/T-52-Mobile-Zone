import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './SpecialProduct.css'

const SpecialProduct = () => {
    return (
        <div className="special_product_container">
            <Container>
                <div className="special_text">
                    <h2>Get 15 % OFF</h2>
                    <h1>Realme CO20A</h1>
                    <p>5000mAh Battery. Real Quality.</p>
                    <p>5000mAh Massive Battery | 16.5cm (6.5") Large Display | Helio <br /> G35 Powerful Processor</p>
                    <div className="mt-3">
                        <span className="product_price">
                            Price: $450
                        </span>
                        <Button className="btn_regular" variant="primary">Shop Now</Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SpecialProduct;