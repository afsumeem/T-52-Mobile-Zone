import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import FeaturedProduct from '../FeaturedProduct/FeaturedProduct';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-coast-68587.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <div className="products_container">
            <Container>
                <div className="section_title">
                    <h2>Featured Products ...</h2>
                    <p>Updated with the featured products</p>
                </div>
                <div className="latest_product_box">
                    <div className="row gy-4">
                        {
                            products.slice(0, 8).map(product => <FeaturedProduct
                                key={product.id}
                                product={product}
                            ></FeaturedProduct>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FeaturedProducts;