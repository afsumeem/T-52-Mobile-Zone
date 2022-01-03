import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Nav, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Carts.css'

const Carts = () => {
    const [cartProducts, setCartProducts] = useState([]);

    //fetch cartProducts API 
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/saveProduct')
            .then(res => res.json())
            .then(data => setCartProducts(data));
    }, [cartProducts])
    return (
        <div className='cart_container'>
            <Container>
                <div className="section_title">
                    <h2>Cart ...</h2>
                    <p> Check your cart products</p>
                </div>
                <Row>
                    <Col xs md={8}>
                        <div className="cart_info">
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartProducts.map(product => <Cart
                                            key={product._id}
                                            product={product}
                                        ></Cart>)
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col xs md={4}>
                        <div className="order_summary">
                            <h4>Order Summary</h4>
                            <div className="sub_total">
                                <span>Sub-total</span>
                                <span>$00.00</span>
                            </div>
                            <div className="deliver">
                                <span>Delivery Charges</span>
                                <span>$00.00</span>
                            </div>
                            <div className="discount">
                                <span>Discount</span>
                                <span>$00.00</span>
                            </div>
                            <div className="total">
                                <span>Total Amout</span>
                                <span>$00.00</span>
                            </div>
                        </div>
                        <Nav.Link as={Link} to="/checkout">
                            <Button className="btn_regular">Checkout to Proced</Button>
                        </Nav.Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Carts;