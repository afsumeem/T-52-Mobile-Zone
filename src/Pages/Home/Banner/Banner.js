import React from "react";
import { Button, Carousel, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div style={{ background: '#ffa135' }}>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-flex align-items-center text-start">
                            <div className="carousel_content">
                                <h2>Get 30 % OFF</h2>
                                <h1>Realme GT Neo 2</h1>
                                <p>50MP AI Camera. All-day Performance. MediaTek Helio G85. 6000mAh Battery.</p>
                                <div className="carousel_bottom mt-5">
                                    <span className="product_price">
                                        Price: $450
                                    </span>
                                    <Nav.Link as={Link} to="/shop">
                                        <Button className="btn_regular">Shop Now</Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="slide_img">
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/bgxNYvT/slide-1.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-flex align-items-center text-start">
                            <div className="carousel_content">
                                <h2>Get 10 % OFF</h2>
                                <h1>iPhone 13 Pro Max</h1>
                                <p>12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS</p>
                                <div className="carousel_bottom mt-5">
                                    <span className="product_price">
                                        Price: $900
                                    </span>
                                    <Nav.Link as={Link} to="/shop">
                                        <Button className="btn_regular">Shop Now</Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="slide_img">
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/R72YbvW/slide-2.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5 d-flex align-items-center text-start">
                            <div className="carousel_content">
                                <h2>Get 30 % OFF</h2>
                                <h1>OPPO Reno6 5G</h1>
                                <p>The Reno6 5G is even easier on the eye with 360° Light-Sensing</p>
                                <div className="carousel_bottom mt-5">
                                    <span className="product_price">
                                        Price: $450
                                    </span>
                                    <Nav.Link as={Link} to="/shop">
                                        <Button className="btn_regular">Shop Now</Button>
                                    </Nav.Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="slide_img">
                                <img
                                    className="d-block w-100"
                                    src="https://i.ibb.co/6rMt61H/slide-3.png"
                                    alt="First slide"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
