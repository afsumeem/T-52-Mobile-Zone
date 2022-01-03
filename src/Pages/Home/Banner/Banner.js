import React from "react";
import { Button, Carousel } from "react-bootstrap";
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
                                    <Button className="btn_regular" variant="primary">Shop Now</Button>
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
                                <h2>Get 30 % OFF</h2>
                                <h1>Realme GT Neo 2</h1>
                                <p>50MP AI Camera. All-day Performance. MediaTek Helio G85. 6000mAh Battery.</p>
                                <div className="carousel_bottom mt-5">
                                    <span className="product_price">
                                        Price: $450
                                    </span>
                                    <Button className="btn_regular" variant="primary">Shop Now</Button>
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
                <Carousel.Item>
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
                                    <Button className="btn_regular" variant="primary">Shop Now</Button>
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
            </Carousel>
        </div>
    );
};

export default Banner;
