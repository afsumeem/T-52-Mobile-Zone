import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, signInWithGoogle } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData);
        setLoginData(newLoginData);
    };

    const handleRegisterSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("your password did not match");
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    };

    return (
        <div className="container  my-5">
            <Row>
                <Col md={6} className="col-lg-6 ">
                    <img className="w-100" src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="" />
                </Col>
                <Col md={6}>
                    <div className="login_form">
                        <div className="login_title mb-4">
                            <h3>Register</h3>
                        </div>
                        <form onSubmit={handleRegisterSubmit}>
                            <label htmlFor="name">Full Name <span>*</span></label>
                            <input onChange={handleOnChange} type="name" name="name" id="name" placeholder="Enter your full Name" required />

                            <label htmlFor="email">Email Address <span>*</span></label>
                            <input onChange={handleOnChange} type="email" name="email" id="email" placeholder="Enter your email" required />

                            <label htmlFor="password">Password <span>*</span></label>
                            <input onChange={handleOnChange} type="password" name="password" id="password" placeholder="Enter your password" required />

                            <label htmlFor="re_pass">Confirm Password <span>*</span></label>
                            <input
                                onChange={handleOnChange}
                                type="password"
                                name="password2"
                                id="re_pass"
                                placeholder="Re enter your password"
                                required
                            />

                            <div className="d-flex align-items-center justify-content-between">
                                <Button type="submit" className="btn_regular">
                                    Register
                                </Button>
                                <Link to="/login">
                                    <Button className="btn_regular" variant="text">Login</Button>
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

export default Register;
