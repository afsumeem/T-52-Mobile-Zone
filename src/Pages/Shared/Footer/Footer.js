import {
  faDiscord,
  faFacebook,
  faInstagram,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container text-start">
      <Container>
        <Row className="pt-4 pb-2 gx-4 gy-3 m-0">
          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">
              <span style={{ color: "#ff2e59" }}>T-52</span> Mobile Zone
            </h5>

            {/* footer contents */}
            <div className="d-flex">
              <FontAwesomeIcon className="footer_icon" icon={faMapMarkerAlt} />
              <p className="ms-2">
                205 Lake street, Mountain View,
                <span className="fs-6">San Francisco, Callifornia</span>
                <br />
                USA
              </p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon className="footer_icon" icon={faPhone} />
              <p className="ms-2">+11 555 123-456</p>
            </div>
            <div className="d-flex">
              <FontAwesomeIcon className="footer_icon" icon={faPaperPlane} />
              <p className="ms-2">support@mobilezone.com</p>
            </div>
          </Col>

          {/* LATEST NEWS */}
          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">LATEST NEWS</h5>
            <div className="d-flex mb-3">
              <img
                src="https://i.ibb.co/6WkCYfF/img.jpg"
                className="footer-latest-news-img img-fluid"
                alt=""
              />
              <div className="footer_text ms-3">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <span>Oct 11 2019 | Admin</span>
              </div>
            </div>

            <div className="d-flex">
              <img
                src="https://i.ibb.co/w7FVt57/img2.jpg"
                className="footer-latest-news-img img-fluid"
                alt=""
              />
              <div className="footer_text ms-3">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <span>Oct 11 2019 | Admin</span>
              </div>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col md={3} sm={6} xs={12}>
            <div className="quick_link ms-md-5">
              <h5 className="mb-4 footer-title">QUICK LINKS</h5>

              <Nav.Link
                as={Link}
                to="/home"
                className="text-dark text-decoration-none"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shop"
                className="text-dark text-decoration-none"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/category"
                className="text-dark text-decoration-none"
              >
                Category
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                className="text-dark text-decoration-none"
              >
                Blogs
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="text-dark text-decoration-none"
              >
                About
              </Nav.Link>
            </div>
          </Col>

          {/* SUBSCRIBE NEWSLETTER */}
          <Col md={3} sm={6} xs={12}>
            <h5 className="mb-4 footer-title">SUBSCRIBE NEWSLETTER</h5>
            <div className="subscrib_box">
              <div className="input-group mb-3">
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
              <div className="mt-3">
                <h3>Follow Us</h3>
              </div>
              <div className="social_icon_box">
                <a className="social_icon" href="https://twitter.com/?lang=en">
                  <FontAwesomeIcon className="footer-text" icon={faTwitter} />
                </a>
                <a className="social_icon" href="https://www.facebook.com/">
                  <FontAwesomeIcon className="footer-text" icon={faFacebook} />
                </a>

                <a className="social_icon" href="https://www.instagram.com/">
                  {" "}
                  <FontAwesomeIcon className="footer-text" icon={faInstagram} />
                </a>

                <a className="social_icon" href="https://www.skype.com/en/">
                  <FontAwesomeIcon className="footer-text" icon={faSkype} />
                </a>

                <a className="social_icon" href="https://discord.com/">
                  {" "}
                  <FontAwesomeIcon className="footer-text" icon={faDiscord} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright_box">
        <Container>
          <div className="d-md-flex justify-content-between ">
            <p className="text-sm-center">
              Copyright &copy;2021 All Rights Reserved{" "}
            </p>
            <p className="text-sm-center">
              This Website is made with &#x003C;&#10083;&#x003E; by Team 52{" "}
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
