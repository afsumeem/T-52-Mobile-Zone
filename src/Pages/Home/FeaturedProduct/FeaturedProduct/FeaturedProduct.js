import axios from "axios";
import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { Link, Link as NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const FeaturedProduct = ({ product }) => {
  const { user } = useAuth()
  const { id, name, brand, price, picture, display, camera, battery } = product;

  const handleSaveProduct = productData => {
    productData.email = user.email;

    axios.post('https://safe-coast-68587.herokuapp.com/saveProduct', productData)
      .then(res => {
        if (res.data.insertedId) {
          alert('product added successfully!');
        }
      })
  }

  const url = `/home/${id}`;
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <div className="product_modal_box row">
          <div className="col-md-5 d-flex align-items-center justify-content-center py-4 ps-5">
            <img style={{ width: "100%" }} src={picture} alt="" />
          </div>
          <div className="col-md-7">
            <div className="modal_content">
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  <NavLink className="link_style" to={url}>
                    {name}
                  </NavLink>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h5>
                  Display:<p>{display}</p>
                </h5>
                <h5>
                  Camera:<p>{camera}</p>
                </h5>
                <h5>
                  Battery:<p>{battery}</p>
                </h5>
              </Modal.Body>

              <Modal.Footer className="justify-content-between">
                <span className="product_price">${price}</span>
                <Button onClick={() => handleSaveProduct(product)} className="btn_regular" variant="primary">
                  Add To Cart
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </div>
      </Modal>
    );
  }

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-md-3">
      <Card className="product_card">
        <div className="image_box">
          <Card.Img className="product_img" variant="top" src={picture} />
        </div>
        <Card.Body>
          <span className="brand">{brand}</span>
          <Card.Title>
            <NavLink as={Link} className="link_style" to="/detailsProduct">
              {name}
            </NavLink>
          </Card.Title>
          <div className="content_box mt-3">
            <span className="product_price">${price}</span>
            <Button onClick={() => handleSaveProduct(product)} className="btn_regular" variant="primary">
              Add To Cart
            </Button>
          </div>
          <Button className="quick_view mt-3" onClick={() => setModalShow(true)}>
            Quick View
          </Button>

          <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FeaturedProduct;
