import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import { FaTshirt, FaMobileAlt, FaCouch, FaRecycle, FaHandsHelping } from 'react-icons/fa'; // Icons for better visuals

const AboutUs = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 font-weight-bold text-dark" style={{ fontSize: '2.5rem' }}>Welcome to Urbanwares</h1>
          <p className="lead text-dark">Your ultimate online shopping destination for the latest trends in fashion, electronics, and home essentials.</p>
        </Col>
      </Row>

      {/* Who We Are Section */}
      <Row className="mb-5 align-items-center">
        <Col md={6} className="order-md-1 mb-4 mb-md-0">
          <h3 className="text-uppercase font-weight-bold mb-3 text-dark">Who We Are</h3>
          <p className="text-dark" style={{ lineHeight: '1.8' }}>
            At Urbanwares, we believe that shopping should be an exciting, personalized experience. We bring together the latest fashion trends, cutting-edge technology, and home essentials—all under one roof. Whether you're upgrading your wardrobe, adding gadgets to your tech collection, or enhancing your living space, we’ve got you covered.
          </p>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <Image src="https://via.placeholder.com/500" fluid roundedCircle />
        </Col>
      </Row>

      {/* What We Offer Section */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center font-weight-bold mb-4 text-dark">What We Offer</h3>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaTshirt size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Clothing</Card.Title>
              <Card.Text className="text-dark">Stylish outfits for all occasions, from casual to formal wear.</Card.Text>
              <Button variant="outline-dark" className="rounded-pill">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaMobileAlt size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Electronics</Card.Title>
              <Card.Text className="text-dark">Get the latest gadgets and tech essentials, from smartphones to laptops.</Card.Text>
              <Button variant="outline-dark" className="rounded-pill">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaCouch size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Home Goods</Card.Title>
              <Card.Text className="text-dark">Transform your living space with functional and stylish furniture.</Card.Text>
              <Button variant="outline-dark" className="rounded-pill">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Values Section */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center font-weight-bold mb-4 text-dark">Our Values</h3>
        </Col>
      </Row>
      <Row>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaHandsHelping size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Quality First</Card.Title>
              <Card.Text className="text-dark">We offer only high-quality products that meet rigorous standards.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaRecycle size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Sustainability</Card.Title>
              <Card.Text className="text-dark">We are committed to eco-friendly products and sustainable practices.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-4">
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <FaHandsHelping size={50} className="text-dark mb-3" />
              <Card.Title className="text-dark">Customer-Centric</Card.Title>
              <Card.Text className="text-dark">Your experience is our top priority with easy navigation and dedicated support.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Us Section */}
      <Row className="text-center mb-5">
        <Col>
          <h3 className="text-uppercase font-weight-bold mb-3 text-dark">Contact Us</h3>
          <p className="text-dark">If you have any questions or need support, feel free to reach out to us.</p>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p><strong className="text-dark">Email:</strong> support@urbanwares.com</p>
          <p><strong className="text-dark">Phone:</strong> +1 (800) 123-4567</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
