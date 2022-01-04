import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";


const linkIcon = <FontAwesomeIcon icon={faLink} />;

const Blog = ({ blog }) => {
    const { img, description, name, date, author } = blog;
    return (
        <Col md={4}>
            <Card className="product_card blog_card">
                <div className="image_box">
                    <Card.Img className="product_img" variant="top" src={img} />
                    <Button className="share_link">{linkIcon}</Button>
                </div>
                <Card.Body className="recent_content">
                    <div className="bolg_writer d-flex justify-content-between align-items-center my-2">
                        <span className="author">by {author}</span>
                        <span>{date}</span>
                    </div>
                    <Card.Title><a href="#">{name}</a></Card.Title>
                    <div className="content_box">
                        <p className="text-start ">{description.slice(0, 120)}</p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;
