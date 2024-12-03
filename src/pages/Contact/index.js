
// import React from 'react';
// import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // Icons for better visuals

// const ContactUs = () => {
//   return (
//     <Container className="my-5">
//       {/* Header Section */}
//       <Row className="text-center mb-4">
//         <Col>
//           <h1 className="display-4 font-weight-bold text-dark">Get In Touch With Us</h1>
//           <p className="lead text-dark">We'd love to hear from you! Whether you have a question, suggestion, or need support, we're here to help.</p>
//         </Col>
//       </Row>

//       {/* Contact Form Section */}
//       <Row className="mb-5">
//         <Col md={6}>
//           <Card className="shadow-sm border-light rounded">
//             <Card.Body>
//               <h4 className="text-center font-weight-bold text-dark mb-4">Send Us A Message</h4>
//               <Form>
//                 <Form.Group controlId="formName">
//                   <Form.Label>Your Name</Form.Label>
//                   <Form.Control type="text" placeholder="Enter your name" />
//                 </Form.Group>
//                 <Form.Group controlId="formEmail">
//                   <Form.Label>Your Email</Form.Label>
//                   <Form.Control type="email" placeholder="Enter your email" />
//                 </Form.Group>
//                 <Form.Group controlId="formMessage">
//                   <Form.Label>Your Message</Form.Label>
//                   <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
//                 </Form.Group>
//                 <Button variant="dark" type="submit" className="w-100">
//                   Send Message
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Contact Info Section */}
//         <Col md={6}>
//           <Card className="shadow-sm border-light rounded">
//             <Card.Body>
//               <h4 className="text-center font-weight-bold text-dark mb-4">Contact Information</h4>
//               <ListGroup variant="flush">
//                 <ListGroup.Item className="d-flex align-items-center">
//                   <FaMapMarkerAlt size={25} className="text-dark mr-3" />
//                   <div className="text-dark">
//                     <strong>Address:</strong><br />
//                     Incedo, 109, Gurgaon, Haryana, India
//                   </div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className="d-flex align-items-center">
//                   <FaPhoneAlt size={25} className="text-dark mr-3" />
//                   <div className="text-dark">
//                     <strong>Phone:</strong><br />
//                     +91 98765 43210
//                   </div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className="d-flex align-items-center">
//                   <FaEnvelope size={25} className="text-dark mr-3" />
//                   <div className="text-dark">
//                     <strong>Email:</strong><br />
//                     urbanwares6@gmail.com
//                   </div>
//                 </ListGroup.Item>
//                 <ListGroup.Item className="d-flex align-items-center">
//                   <FaClock size={25} className="text-dark mr-3" />
//                   <div className="text-dark">
//                     <strong>Business Hours:</strong><br />
//                     Mon-Fri: 9:00 AM - 6:00 PM (IST)
//                   </div>
//                 </ListGroup.Item>
//               </ListGroup>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Google Maps Static Image Section */}
//       <Row className="mb-5">
//         <Col>
//           <h3 className="text-center font-weight-bold mb-4 text-dark">Our Location</h3>
//           <div className="text-center">
//             <img
//               src="https://maps.googleapis.com/maps/api/staticmap?center=Incedo,+109,+Gurgaon,+Haryana,+India&zoom=14&size=600x300&maptype=roadmap&markers=color:red|label:A|28.4595,77.0266&key=YOUR_GOOGLE_MAPS_API_KEY"
//               alt="Our Location"
//               className="img-fluid rounded shadow-sm"
//             />
//             <p className="text-dark mt-2">Click on the map to get directions.</p>
//           </div>
//         </Col>
//       </Row>

//       {/* Customer Support Section */}
//       <Row className="text-center mb-5">
//         <Col>
//           <h3 className="font-weight-bold text-dark mb-4">Need More Help?</h3>
//           <p className="text-dark">
//             Our support team is always ready to assist you with any inquiries or issues. Reach out to us anytime and we'll get back to you as soon as possible!
//           </p>
//           <Button variant="dark" href="mailto:urbanwares6@gmail.com">
//             Email Support
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ContactUs;




import React from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'; // Icons for better visuals

const ContactUs = () => {
  return (
    <Container className="my-5">
      {/* Header Section */}
      <Row className="text-center mb-4">
        <Col>
          <h1 className="display-4 font-weight-bold text-dark">Get In Touch With Us</h1>
          <p className="lead text-dark">We'd love to hear from you! Whether you have a question, suggestion, or need support, we're here to help.</p>
        </Col>
      </Row>

      {/* Contact Form Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <h4 className="text-center font-weight-bold text-dark mb-4">Send Us A Message</h4>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message here" />
                </Form.Group>
                <Button variant="dark" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Info Section */}
        <Col md={6}>
          <Card className="shadow-sm border-light rounded">
            <Card.Body>
              <h4 className="text-center font-weight-bold text-dark mb-4">Contact Information</h4>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center">
                  <FaMapMarkerAlt size={25} className="text-dark mr-3" />
                  <div className="text-dark">
                    <strong>Address:</strong><br />
                    Incedo, 109, Gurgaon, Haryana, India
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FaPhoneAlt size={25} className="text-dark mr-3" />
                  <div className="text-dark">
                    <strong>Phone:</strong><br />
                    +91 98765 43210
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FaEnvelope size={25} className="text-dark mr-3" />
                  <div className="text-dark">
                    <strong>Email:</strong><br />
                    urbanwares6@gmail.com
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center">
                  <FaClock size={25} className="text-dark mr-3" />
                  <div className="text-dark">
                    <strong>Business Hours:</strong><br />
                    Mon-Fri: 9:00 AM - 6:00 PM (IST)
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Google Maps Embedded Section */}
      <Row className="mb-5">
        <Col>
          <h3 className="text-center font-weight-bold mb-4 text-dark">Our Location</h3>
          <div className="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.4792080361243!2d77.024417!3d28.4594978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dc35c78c853%3A0x9b73f377a92b6b32!2sIncedo%20Inc.!5e0!3m2!1sen!2sin!4v1699387430924!5m2!1sen!2sin"
              width="600"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-sm"
              title="Our Location"
            ></iframe>
            <p className="text-dark mt-2">
              <a
                href="https://www.google.com/maps/dir//Incedo,+109,+Gurgaon,+Haryana,+India/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Click here to get directions.
              </a>
            </p>
          </div>
        </Col>
      </Row>

      {/* Customer Support Section */}
      <Row className="text-center mb-5">
        <Col>
          <h3 className="font-weight-bold text-dark mb-4">Need More Help?</h3>
          <p className="text-dark">
            Our support team is always ready to assist you with any inquiries or issues. Reach out to us anytime and we'll get back to you as soon as possible!
          </p>
          <Button variant="dark" href="mailto:urbanwares6@gmail.com">
            Email Support
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
