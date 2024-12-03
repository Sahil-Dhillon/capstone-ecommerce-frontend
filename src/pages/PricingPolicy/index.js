import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "./PricingPolicy.css";

const PricingPolicy = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 font-weight-bold text-dark">Pricing Policy</h1>
          <p className="lead text-muted">
            Learn about how we set our prices, discounts, and additional charges.
          </p>
        </Col>
      </Row>

      {/* Policy Highlights Section */}
      <Row className="mb-5">
        <Col md={10} lg={8} className="mx-auto">
          <Card className="shadow-sm border-light">
            <Card.Body>
              <h4 className="font-weight-bold text-dark mb-3">Transparency in Pricing</h4>
              <p className="text-muted">
                We are committed to providing transparent pricing on all products. The price displayed
                on the product page is inclusive of applicable taxes. Any additional charges, such as shipping or handling, will be clearly mentioned during checkout.
              </p>

              <h4 className="font-weight-bold text-dark mt-4 mb-3">Discounts and Promotions</h4>
              <p className="text-muted">
                We periodically offer discounts and promotional deals. The final price after applying discounts will be reflected during checkout. Note that some promotions may have eligibility criteria, which will be communicated clearly.
              </p>

              <h4 className="font-weight-bold text-dark mt-4 mb-3">Dynamic Pricing</h4>
              <p className="text-muted">
                Our pricing may vary based on demand, seasonality, and inventory. Rest assured, you will always see the most accurate price at the time of purchase.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Refunds and Returns */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-light">
            <Card.Body>
              <h4 className="font-weight-bold text-dark mb-3">Refunds and Returns</h4>
              <p className="text-muted">
                If you return a product, the refund will be processed based on the price you paid at the
                time of purchase. Any discounts or promotions applied will not be refunded as cash.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-light">
            <Card.Body>
              <h4 className="font-weight-bold text-dark mb-3">Pricing Errors</h4>
              <p className="text-muted">
                In case of any pricing errors on our website, we reserve the right to cancel the order
                and notify you promptly. We strive to ensure all prices are accurate.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Charges */}
      <Row>
        <Col>
          <Card className="shadow-sm border-light">
            <Card.Body>
              <h4 className="font-weight-bold text-dark mb-3">Additional Charges</h4>
              <p className="text-muted">
                Any additional charges, such as shipping fees or taxes, will be displayed during checkout. These charges may vary based on your location or the product category.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Customer Support Section */}
      <Row className="text-center mt-5">
        <Col>
          <h3 className="font-weight-bold text-dark">Have Questions About Pricing?</h3>
          <p className="text-muted">
            Our support team is here to assist you with any concerns related to pricing or payments.
          </p>
          <a href="mailto:urbanwares6@gmail.com" className="btn btn-dark">
            Contact Support
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingPolicy;
