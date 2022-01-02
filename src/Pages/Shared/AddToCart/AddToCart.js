import { useEffect, useState } from "react";
import { Badge, Button, Nav, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import './AddToCart.css';
import CartProduct from "../../CartProduct/CartProduct";

const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />;

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [saveProducts, setSaveProducts] = useState([]);

    //fetch savedProduct API 
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/saveProduct')
            .then(res => res.json())
            .then(data => setSaveProducts(data));
    }, [saveProducts])

    return (
        <>
            <Nav.Link onClick={handleShow} className="nav_icon" href="#deets">
                {shoppingCart}
                <Badge>{saveProducts.length}</Badge>
            </Nav.Link>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Carts</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        saveProducts.map(product => <CartProduct
                            key={product._id}
                            product={product}
                        ></CartProduct>)
                    }
                </Offcanvas.Body>
                <div className="cart_footer">
                    <Button className="btn_regular">View Cart</Button>
                    <Button className="btn_regular">Checkout</Button>
                </div>
            </Offcanvas>
        </>
    );
}

function AddToCart() {
    return (
        <>
            {['end'].map((placement, idx) => (
                <OffCanvasExample key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default AddToCart;