import React from 'react';
import { Container, Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap';
// import './FAQPage.css';

const FAQPage = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 font-weight-bold text-dark">Frequently Asked Questions</h1>
          <p className="lead text-muted">Find answers to the most common questions about our services, products, and policies.</p>
        </Col>
      </Row>

      {/* FAQ Section */}
      <Row className="mb-5">
        <Col md={10} lg={8} className="mx-auto">
          <Accordion defaultActiveKey="0">
            {/* FAQ Item 1 */}
            <Accordion.Item eventKey="0">
              <Accordion.Header>What is the return policy?</Accordion.Header>
              <Accordion.Body>
                You can return most items within 30 days of receipt for a full refund or exchange. Items must be in their original packaging and condition. Custom or personalized products may not be eligible for returns.
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ Item 2 */}
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do I track my order?</Accordion.Header>
              <Accordion.Body>
                Once your order is shipped, you will receive an email with a tracking number and a link to track your package. You can also log in to your account and check the "Orders" section to view the status of your shipment.
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ Item 3 */}
            <Accordion.Item eventKey="2">
              <Accordion.Header>What payment methods do you accept?</Accordion.Header>
              <Accordion.Body>
                We accept various payment methods, including credit cards, debit cards, PayPal, Google Pay, and Apple Pay. Cash on delivery (COD) is also available for select locations.
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ Item 4 */}
            <Accordion.Item eventKey="3">
              <Accordion.Header>Do you offer international shipping?</Accordion.Header>
              <Accordion.Body>
                Yes, we offer international shipping to select countries. Shipping rates and delivery times vary depending on the destination. Additional customs fees may apply based on your country's regulations.
              </Accordion.Body>
            </Accordion.Item>

            {/* FAQ Item 5 */}
            <Accordion.Item eventKey="4">
              <Accordion.Header>How do I contact customer support?</Accordion.Header>
              <Accordion.Body>
                You can reach our customer support team via email at <strong>urbanwares6@gmail.com</strong> or call us at <strong>+91 98765 43210</strong>. Our business hours are Monday to Friday, 9:00 AM - 6:00 PM (IST).
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>

      {/* Search for FAQs Section */}
      <Row className="text-center mb-5">
        <Col>
          <h3 className="font-weight-bold text-dark">Still Have Questions?</h3>
          <p className="text-muted">Try searching for an answer below or contact our support team directly.</p>
          <Form className="d-flex justify-content-center">
            <Form.Control
              type="text"
              placeholder="Type your question here..."
              className="w-50 shadow-sm"
            />
            <Button variant="dark" type="submit" className="ml-2">
              Search
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Contact Support Section */}
      <Row className="text-center">
        <Col>
          <h4 className="font-weight-bold text-dark">Need Personalized Support?</h4>
          <p className="text-muted">Our team is here to assist you with any specific inquiries.</p>
          <Button variant="dark" href="mailto:urbanwares6@gmail.com">
            Contact Support
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQPage;
