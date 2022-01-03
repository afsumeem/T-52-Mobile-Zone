import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';

const AddNewProduct = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit
    const onSubmit = data => {
        axios.post('https://safe-coast-68587.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Product Added Successful!!");
                    reset();
                }
            })
    };

    return (
        <Container className="my-5 pt-4">
            <div className="section_title">
                <h2>Add New Product ...</h2>
                <p>Add Latest Products</p>
            </div>
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    <div className="login_form">
                        <div className="login_title mb-5">
                            <h3>Add New Product</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='m-auto'>
                            <label htmlFor="product">Product Name<span>*</span></label>
                            <input placeholder='Enter new product name' id="product" {...register("name", { required: true })} />

                            <label htmlFor="img_link">Image Link <span>*</span></label>
                            <input placeholder='Paste your image link' id="img_link" {...register("picture", { required: true })} />


                            <label htmlFor="brand">Brand<span>*</span></label>
                            <input placeholder='Brand Name' id="brand" {...register("brand", { required: true })} />

                            <label htmlFor="condition">Product condition<span>*</span></label>
                            <input placeholder='Product condition' id="condition" {...register("condition", { required: true })} />

                            <label htmlFor="display">Display<span>*</span></label>
                            <input placeholder='Display' id="display" {...register("display", { required: true })} />

                            <label htmlFor="battery">Battery Specification<span>*</span></label>
                            <input placeholder='Battery' id="battery" {...register("battery", { required: true })} />

                            <label htmlFor="camera">Camera<span>*</span></label>
                            <input placeholder='Camera' id="camera" {...register("camera", { required: true })} />


                            <label htmlFor="price">Product Price<span>*</span></label>
                            <input id="price" placeholder='Product Price' {...register("price", { required: true })} />

                            <Button type="submit" className="btn_regular w-100 py-3 fw-bold">
                                Add Product
                            </Button>
                        </form>
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    );
};

export default AddNewProduct;