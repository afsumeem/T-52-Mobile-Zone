import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './CartProduct.css';

const closeIcon = <FontAwesomeIcon icon={faTimes} />;

const CartProduct = ({ product }) => {
    const { name, picture, price } = product;
    return (
        <div className="cart_box">
            <div className="cart_img">
                <img src={picture} alt="" />
            </div>
            <div className="cart_content">
                <h6>{name}</h6>
                <div className="cart_price">
                    <span className="price">${price}</span>
                    <span className="cancel_btn">{closeIcon}</span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;