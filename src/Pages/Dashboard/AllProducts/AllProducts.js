import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Col, Modal } from 'react-bootstrap';
const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const AllProducts = ({ product }) => {
    const { name, picture, price, _id } = product;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    // handle delete product from add to cart
    const handleDeleteProduct = id => {
        const url = `https://safe-coast-68587.herokuapp.com/products/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                }
            })
            .finally(setShow(false))
    };

    return (
        <Col md={4} sm={6} xs={12} className="cart_box">
            <div className="cart_img">
                <img src={picture} alt="" />
            </div>
            <div className="cart_content">
                <h6>{name}</h6>
                <div className="cart_price">
                    <span className="price">${price}</span>
                    <span onClick={() => { setShow(true); }} className="cancel_btn">{closeIcon}</span>
                </div>
            </div>

            {/* Confirmation alert */}
            < Modal show={show} onHide={handleClose} >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Confirmation</h5>
                </div>
                <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { handleDeleteProduct(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="outline-success" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal >
        </Col>
    );
};

export default AllProducts;