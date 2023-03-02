import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './CartProduct.css';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const CartProduct = ({ product }) => {
    const { name, picture, price, _id } = product;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleNoBtn = () => setShow(false);

    // handle delete product from add to cart
    const handleDeleteOrder = id => {
        const url = `https://mobile-zone.vercel.app/cartProduct/${id}`

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
        <div className="cart_box">
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
                <Modal.Body>Are you sure you want to delete this product from add to cart?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { handleDeleteOrder(_id) }}>
                        Yes! Delete it
                    </Button>
                    <Button variant="outline-success" onClick={handleNoBtn}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal >
        </div>
    );
};

export default CartProduct;