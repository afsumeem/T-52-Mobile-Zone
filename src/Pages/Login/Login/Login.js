import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { loginUser, signInWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, navigate);

    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
  };


  return (
    <div className="container  ">
      <Row>
        <Col md={7}>
          <div className="form_img">
            <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />
          </div>
        </Col>
        <Col md={5} className="d-flex align-items-center justify-content-center">
          <div className="login_form">
            <div className="login_title mb-4">
              <h3>Please Login</h3>
            </div>
            <form onSubmit={handleLoginSubmit}>
              <label htmlFor="email">Email Address <span>*</span></label>
              <input onChange={handleOnChange} type="email" name="email" id="email" placeholder="Enter your email" required />

              <label htmlFor="password">Password <span>*</span></label>
              <input onChange={handleOnChange} type="password" name="password" id="password" placeholder="Enter your password" required />

              <div className="d-flex align-items-center justify-content-between">
                <Button type="submit" className="btn_regular">
                  Login
                </Button>
                <Link to="/register">
                  <Button className="btn_regular" variant="text">Register</Button>
                </Link>
              </div>

              <Button onClick={handleGoogleSignIn} className="btn_regular w-100 mt-4">
                Sign In With Google
              </Button>
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;