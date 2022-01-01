import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import "./BestNewItems.css";

const BestNewItems = () => {
    return (
        <Container fluid>
            <div className="row gx-4">
                <div className="col-md-4">
                    <Card className="best_new_card">
                        <Card.Body>
                            <Card.Title>Best New</Card.Title>
                            <Card.Title>Vivo X60 Pro</Card.Title>
                            <Button className="btn_regular" variant="primary">Shop Now</Button>
                        </Card.Body>
                        <Card.Img variant="top" src="https://i.ibb.co/CHFPC0v/vivo-x60.png" />
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="best_new_card bg-2">
                        <Card.Body>
                            <Card.Title>Best New</Card.Title>
                            <Card.Title>iPhone 13 Pro Max</Card.Title>
                            <Button className="btn_regular" variant="primary">Shop Now</Button>
                        </Card.Body>
                        <Card.Img variant="top" src="https://i.ibb.co/Ltvtns1/iphone.png" />
                    </Card>
                </div>
                <div className="col-md-4">
                    <Card className="best_new_card">
                        <Card.Body>
                            <Card.Title>Best New</Card.Title>
                            <Card.Title>Xiaomi Mi 11 Ultra</Card.Title>
                            <Button className="btn_regular" variant="primary">Shop Now</Button>
                        </Card.Body>
                        <Card.Img variant="top" src="https://i.ibb.co/Gs22H3q/xiaom.png" />
                    </Card>
                </div>
            </div>
        </Container>
    );
};

export default BestNewItems;