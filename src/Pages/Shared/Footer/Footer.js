import { faDiscord, faFacebook, faInstagram, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container text-start ">
      <Container>
        <Row className="pt-4 pb-2 gx-4 gy-3 m-0">
          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">ADDRESS</h5>

            {/* footer contents */}
            <div className="d-flex ">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-2 fs-4 footer-text" />

              <p className="ms-3">
                205 Lake street, Mountain View,
                <span className="fs-6">San Francisco, Callifornia</span>
                <br />
                USA
              </p>
            </div>
            <div className="d-flex ">
              <FontAwesomeIcon icon={faPhone} className="footer-text mt-1 fs-4" />

              <p className="fs-6 ms-3">+11 555 123-456 </p>
            </div>

            <div className="d-flex">
              <FontAwesomeIcon icon={faPaperPlane} className="footer-text mt-1 fs-4" />
              <p className=" ms-3">support@hs.com </p>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">LATEST NEWS</h5>
            <div className="d-flex">
              <img src="https://i.ibb.co/6WkCYfF/img.jpg" className="footer-latest-news-img img-fluid" alt="" />

              <p className="ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
                <br />
                <span className="footer-text fw-bold">Oct 11 2019 | Admin</span>
              </p>
            </div>

            <div className="d-flex">
              <img src="https://i.ibb.co/w7FVt57/img2.jpg" className="footer-latest-news-img img-fluid" alt="" />

              <p className="ms-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit!
                <br />
                <span className="footer-text fw-bold">Oct 11 2019 | Admin</span>
              </p>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12}>
            <div className="ms-md-5">
              <h5 className="mb-4 footer-title">QUICK LINKS</h5>

              <Nav.Link as={Link} to="/home" className="text-dark text-decoration-none">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop" className="text-dark text-decoration-none">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/category" className="text-dark text-decoration-none">
                Category
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-dark text-decoration-none">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-dark text-decoration-none">
                About
              </Nav.Link>
            </div>
          </Col>

          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">SUBSCRIBE NEWSLETTER</h5>
            <div class="input-group mb-3 pt-5">
              <input
                type="text"
                className="form-control footer-input"
                placeholder="Enter Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />

              <Button className="input-background border-0">
                <FontAwesomeIcon icon={faPaperPlane} className=" mt-1" />
              </Button>
            </div>
            <Button variant="none rounded-circle m-2" className="social-icon" size="sm">
              <a href="https://twitter.com/?lang=en">
                <FontAwesomeIcon className="footer-text" icon={faTwitter} />
              </a>
            </Button>

            <Button variant="none rounded-circle m-2" className="social-icon" size="sm">
              <a href="https://www.facebook.com/">
                <FontAwesomeIcon className="footer-text" icon={faFacebook} />
              </a>
            </Button>

            <Button variant="none rounded-circle m-2" className="social-icon" size="sm">
              <a href="https://www.instagram.com/">
                {" "}
                <FontAwesomeIcon className="footer-text" icon={faInstagram} />
              </a>
            </Button>

            <Button variant="none rounded-circle m-2" className="social-icon" size="sm">
              <a href="https://www.skype.com/en/">
                <FontAwesomeIcon className="footer-text" icon={faSkype} />
              </a>
            </Button>

            <Button variant="none rounded-circle m-2" className="social-icon" size="sm">
              <a href="https://discord.com/">
                {" "}
                <FontAwesomeIcon className="footer-text" icon={faDiscord} />
              </a>
            </Button>
          </Col>
          <hr />
        </Row>
        <div className="d-md-flex justify-content-between ">
          <p className="text-sm-center">Copyright &copy;2021 All Rights Reserved </p>

          <p className="text-sm-center">This Website is made with &#x003C;&#10083;&#x003E; by Team 52 </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
