import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import BrandProduct from '../BrandProduct/BrandProduct';

const BrandProducts = () => {
    const { brand } = useParams();

    const [products, setProducts] = useState([]);

    const [findBrands, setFindBrands] = useState([]);

    useEffect(() => {
        fetch('https://mobile-zone.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products.length) {
            const newBrand = products.filter(productBrand => productBrand.brand == brand)
            setFindBrands(newBrand)
        }
    }, [products, brand])

    console.log(findBrands)
    return (
        <div className="my-5 pt-4">
            <Container>
                <div className="section_title">
                    <h2>{brand} ...</h2>
                    <p>Updated with the week</p>
                </div>

                <Row>
                    {
                        findBrands.map(product => <BrandProduct
                            key={product._id}
                            product={product}
                        ></BrandProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default BrandProducts;