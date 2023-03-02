import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Blogs.css';
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://mobile-zone.vercel.app/blog")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="blogs_container my-5 pt-4">
            <Container>
                <div className="section_title ">
                    <h2>Our Blogs ...</h2>
                    <p>Updated with the our blogs</p>
                </div>
                <Row>
                    <Col xs md={3}>
                        <div className="recent_box">
                            <div className="recent_top">
                                <h5>
                                    Recent <span style={{ color: "var(--red)" }}>Article</span>
                                </h5>
                            </div>

                            {blogs.map((blog) => (
                                <Row className="product_card m-2 py-2">
                                    <Col xs={4} md={5} className="recent_img">
                                        <img className="w-100" src={blog.img} alt="" />
                                    </Col>
                                    <Col xs={8} md={7} className="recent_text">
                                        <h6>{blog.name}</h6>
                                        <span>{blog.date}</span>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Col>

                    <Col xs md={9}>
                        <Row className="g-3">
                            {blogs.map((blog) => (
                                <Blog key={blog.id} blog={blog}></Blog>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;
