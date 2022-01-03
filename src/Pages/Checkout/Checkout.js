import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth';
import './checkout.css'

const Checkout = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [saveProducts, setSaveProducts] = useState([]);

    //fetch savedProduct API 
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/saveProduct')
            .then(res => res.json())
            .then(data => setSaveProducts(data));
    }, [saveProducts])

    // const totalPrice =


    // handle submit
    const onSubmit = data => {

        axios.post('https://safe-coast-68587.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Successful!!");
                    reset();
                }
            })
    };


    return (
        <div style={{ 'backgroundColor': '#fef5ef' }}>
            <Container>
                <Row>
                    <div className='section_title pt-3'>
                        <h2>Checkout</h2>
                    </div>

                    <Col md={8}>

                        <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>

                            <input className='d-block my-3 w-75 m-auto p-1' defaultValue={user.displayName} {...register("name", { required: true })} />

                            <input className='d-block my-3 w-75 m-auto p-1' defaultValue={user.email} {...register("email", { required: true })} />

                            <input className='d-block my-3 w-75 m-auto p-1' placeholder="Country"{...register("Country", { required: true })} />

                            <input className='d-block my-3 w-75 m-auto p-1' placeholder="City"{...register("city", { required: true })} />

                            <input className='d-block my-3 w-75 m-auto p-1' placeholder="Post Code"{...register("post", { required: true })} />

                            <input className='d-block my-3 w-75 m-auto p-1' placeholder="Region / State"{...register("region")} />

                            <input className='d-block my-3 w-75 m-auto p-1' type="date" placeholder="Choose Date"{...register("date", { required: true })} />

                            <Button type="submit" className='quick_view d-block my-3 w-75 m-auto p-1'>
                                Place Order
                            </Button>


                        </form>
                    </Col>
                    <Col md={4}>

                        {/* {

                            saveProducts.map(product => product.price)
                        } */}

                        <div className="order_summary">
                            <h4>Order Summary</h4>
                            <div className="sub_total">
                                <span>Sub-total</span>
                                <span>$00.00</span>
                            </div>
                            <div className="deliver">
                                <span>Delivery Charges</span>
                                <span>$00.00</span>
                            </div>
                            <div className="discount">
                                <span>Discount</span>
                                <span>$00.00</span>
                            </div>
                            <div className="total">
                                <span>Total Amount</span>
                                <span>$00.00</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Checkout;