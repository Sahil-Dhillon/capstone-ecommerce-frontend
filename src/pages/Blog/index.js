import React from 'react';
import { Container, Row, Col, Card, Button, Carousel, Badge, Form, InputGroup } from 'react-bootstrap';

const BlogPage = () => {
    return (
        <Container className="my-5">
            {/* Hero Section with Carousel */}
            <Row className="mb-5">
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1920x600?text=Fashion+Trends"
                                alt="Fashion"
                            />
                            <Carousel.Caption>
                                <h3>Latest Fashion Trends</h3>
                                <p>Discover what's new and trending in fashion for 2024!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1920x600?text=Electronics"
                                alt="Electronics"
                            />
                            <Carousel.Caption>
                                <h3>Best Electronics in 2024</h3>
                                <p>Stay updated with the latest gadgets and electronics.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/1920x600?text=Books"
                                alt="Books"
                            />
                            <Carousel.Caption>
                                <h3>Must-Read Books</h3>
                                <p>Explore our top book recommendations for the year.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            {/* Blog Section */}
            <Row className=" g-4 mb-5">
                {/* Blog Post 1 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Fashion+Post+1" />
                        <Card.Body>
                            <Card.Title className="text-dark">How to Style Your Winter Wardrobe</Card.Title>
                            <Card.Text>
                                Get inspired by our expert tips on layering, choosing fabrics, and accessories to stay chic and cozy this winter season.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>January 25, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Blog Post 2 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Electronics+Post+1" />
                        <Card.Body>
                            <Card.Title className="text-dark">Top 5 Smart Home Gadgets for 2024</Card.Title>
                            <Card.Text>
                                Enhance your living space with the best smart home gadgets of the year. From voice assistants to home security systems, we've got you covered.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>February 10, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Blog Post 3 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Books+Post+1" />
                        <Card.Body>
                            <Card.Title className="text-dark">Books You Need to Read This Year</Card.Title>
                            <Card.Text>
                                Dive into our top book recommendations across various genres. Whether you’re into fiction, non-fiction, or self-improvement, we’ve got something for you!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>March 5, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Blog Post 4 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Fashion+Post+2" />
                        <Card.Body>
                            <Card.Title className="text-dark">The Best Street Style Looks for 2024</Card.Title>
                            <Card.Text>
                                From urban chic to casual cool, we’ve compiled the best street style looks to inspire your everyday wardrobe this year.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>March 18, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Blog Post 5 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Electronics+Post+2" />
                        <Card.Body>
                            <Card.Title className="text-dark">The Future of Wearable Technology</Card.Title>
                            <Card.Text>
                                Discover the latest trends in wearable tech, from smartwatches to fitness trackers, and how they’re revolutionizing our daily lives.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>April 2, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>

                {/* Blog Post 6 */}
                <Col xs={12} md={6} lg={4}>
                    <Card className="border-0 shadow-lg rounded h-100">
                        <Card.Img variant="top" src="https://via.placeholder.com/400x250?text=Books+Post+2" />
                        <Card.Body>
                            <Card.Title className="text-dark">10 Books Every Entrepreneur Should Read</Card.Title>
                            <Card.Text>
                                Whether you’re a seasoned entrepreneur or just starting, these books will equip you with the knowledge to excel in business and life.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <small>April 15, 2024</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            {/* Newsletter Subscription Section */}
            <Row className="justify-content-center my-5">
                <Col xs={12} md={8} lg={6}>
                    <div className="text-center">
                        <h2 className="display-6">Stay Updated with Our Latest Blogs</h2>
                        <p className="lead text-muted">Subscribe to our newsletter and never miss an update.</p>
                        <Form>
                            <InputGroup>
                                <Form.Control
                                    placeholder="Enter your email"
                                    aria-label="Enter your email"
                                    aria-describedby="subscribe-btn"
                                />
                                <Button variant="primary" id="subscribe-btn">Subscribe</Button>
                            </InputGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogPage;
