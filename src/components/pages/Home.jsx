

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeBanner from '../HomeBanner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
    // Declare products state using useState hook
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from Products.json
        fetch('./Products.json')
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Logging the products data for debugging
    console.log('products------->', products);

    return (
        <Container>
            <HomeBanner />
            <Row>
                <h2>Latest Products</h2>
            </Row>
            <Row>
                {products.map((product, index) => (
                    <Col key={index} md={4} className='mb-3'>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    <b>{product.price}<br /></b>
                                    {product.description}
                                </Card.Text>
                                {/* Use the Link component for navigation */}
                                <Button variant="primary" as={Link} to={`/product/${product.id}`}>
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
