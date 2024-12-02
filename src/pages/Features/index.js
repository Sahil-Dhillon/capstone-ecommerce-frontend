import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShippingFast, FaMoneyBillWave, FaShieldAlt, FaMobileAlt, FaTag, FaUsers } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 font-weight-bold text-dark">Why Shop With Us?</h1>
          <p className="lead text-muted">
            Explore the unique features that make us stand out and provide the best shopping experience.
          </p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="text-center mb-5">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaShippingFast size={50} className="text-primary mb-3" />
              <h4 className="text-dark font-weight-bold">Fast & Free Shipping</h4>
              <p className="text-muted">
                Enjoy quick and free shipping on all orders above ₹500. Get your products delivered swiftly to your doorstep.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaMoneyBillWave size={50} className="text-success mb-3" />
              <h4 className="text-dark font-weight-bold">Easy Returns</h4>
              <p className="text-muted">
                Hassle-free returns within 7 days of delivery. Customer satisfaction is our priority.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaShieldAlt size={50} className="text-danger mb-3" />
              <h4 className="text-dark font-weight-bold">Secure Payments</h4>
              <p className="text-muted">
                Your transactions are protected with industry-leading encryption and fraud prevention measures.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaMobileAlt size={50} className="text-info mb-3" />
              <h4 className="text-dark font-weight-bold">Mobile-Friendly</h4>
              <p className="text-muted">
                Shop on the go with our mobile-friendly website designed for seamless user experience.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaTag size={50} className="text-warning mb-3" />
              <h4 className="text-dark font-weight-bold">Exclusive Deals</h4>
              <p className="text-muted">
                Access special discounts and exclusive deals available only on our platform.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm feature-card">
            <Card.Body>
              <FaUsers size={50} className="text-secondary mb-3" />
              <h4 className="text-dark font-weight-bold">24/7 Support</h4>
              <p className="text-muted">
                Our customer support team is available around the clock to assist you with any queries.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action Section */}
      <Row className="text-center mt-5">
        <Col>
          <h3 className="font-weight-bold text-dark">Ready to Start Shopping?</h3>
          <p className="text-muted">
            Join thousands of satisfied customers and experience the best in online shopping.
          </p>
          <Link to="/#" variant="primary" size="lg">
            Start Shopping
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesPage;
