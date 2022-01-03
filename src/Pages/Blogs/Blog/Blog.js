import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = ({ blog }) => {
    const { img, description, name, date, author } = blog;
    return (
        <div className="col-lg-6 mb-2">
            <Card className="product_card">
                <div className="image_box">
                    <Card.Img className="product_img" variant="top" src={img} />
                </div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <div className="content_box mt-3">
                        <p className="text-start ">{description.slice(0, 200)}</p>
                        <br />
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ color: "gray" }}>{date}<br />
                                {author}
                            </span>
                            <Button className="btn_regular text-end" variant="primary">
                                Read More
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;
