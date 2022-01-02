import React, { useReducer } from "react";
import "./Navigation.css";
import { Badge, Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import useFirebase from "../../Hooks/useFirebase";

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;
const hardIcon = <FontAwesomeIcon icon={faHeart} />;

const Navigation = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      {/* top navbar */}
      <Navbar collapseOnSelect expand="lg" style={{ background: "#ebebeb" }}>
        <Container>
          <Navbar.Brand className="fw-bold" href="#home">
            <span style={{ color: "red" }}>T-52</span> Mobile Zone
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: "30px 0 0 30px", border: "1px solid #17d74a !important" }}
                  className="search_input"
                />
                <Button className="search_btn" style={{ borderRadius: "0 30px 30px 0" }} variant="outline-success">
                  Search
                </Button>
              </Form>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                My Account
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Cart
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Checkout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* main navbar */}
      <Navbar collapseOnSelect expand="lg" style={{ background: "#fef5ef", padding: "20px 0" }}>
        <Container>
          <NavDropdown title="All-Brands" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/apple">
              Apple
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/samsung">
              Samsung
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/huawei">
              Huawei
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/oppo">
              Oppo
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/vivo">
              Vivo
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/xiaomi">
              Xiaomi
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/realme">
              Realme
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto main_nav">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/category">
                Category
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user.email ? (
                <Button onClick={logOut} className="buynow-btn">
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button className="buynow-btn" color="inherit">
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
            <Nav>
              <Nav.Link className="nav_icon" href="#deets">
                {hardIcon}
                <Badge>0</Badge>
              </Nav.Link>
              <Nav.Link className="nav_icon" href="#deets">
                {shoppingCart}
                <Badge>0</Badge>
              </Nav.Link>
              <Nav.Link className="total_price">USD: $00.00</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
