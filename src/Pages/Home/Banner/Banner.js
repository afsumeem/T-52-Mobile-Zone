import React from "react";
import { Button } from "react-bootstrap";

const Banner = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <div className="row py-5 ">
                    <div className=" col-lg-6 col-sm-12 text-start ">
                        <h2 className="fs-1 fw-bold text-info  ">
                            Phone Lover
                            <br /> For Every Phones
                        </h2>
                        <p className=" mt-4">
                            A mobile phone is one kind of portable telephone. A great discovery of science. We get and send news, play game, time,
                            calculator, etc. everything from the phone.
                        </p>
                        <Button className="bg-primary p-2 rounded-4 mt-4 fs-5 fw-bold"> Buy Now</Button>
                    </div>
                    <div className="col-lg-6 col-sm-12 ">
                        <img className="w-100" src="https://i.ibb.co/846J3CM/phone2.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
