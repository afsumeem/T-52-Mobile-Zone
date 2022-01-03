import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ShopProduct from '../ShopProduct/ShopProduct';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="products_container">
            <Container>
                <div className="section_title">
                    <h2>Shop ...</h2>
                    <p>Updated with the Shop products</p>
                </div>
                <div className="latest_product_box">
                    <div className="row gy-4">
                        {
                            products.map(product => <ShopProduct
                                key={product.id}
                                product={product}
                            ></ShopProduct>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Shop;