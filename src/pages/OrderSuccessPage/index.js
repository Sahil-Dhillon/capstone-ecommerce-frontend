import React from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const OrderSuccessPage = () => {
  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    mobile: "123-456-7890",
  };

  const orderDetails = {
    orderId: "ORD123",
    status: "Completed",
    date: "2024-11-20",
    totalAmount: "$150",
    paymentMode: "Credit Card",
    deliveryAddress: "123 Main Street, Springfield",
  };

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Success Message */}
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="success" className="text-center w-75 py-3">
              <FaCheckCircle size={50} className="mb-2" />
              <h4>Order Successfully Placed!</h4>
              <p>Your order has been successfully placed and will be delivered soon.</p>
            </Alert>
          </div>

          {/* User Details Section */}
          <div className="text-center mb-4">
            <h3 className="text-primary">Order Summary</h3>
            <Table striped bordered hover responsive className="mt-3">
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{userData.firstName}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{userData.lastName}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userData.email}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{userData.mobile}</td>
                </tr>
              </tbody>
            </Table>
          </div>

          {/* Order Details Table */}
          <div className="text-center mb-4">
            <h4>Order Details</h4>
            <Table striped bordered hover responsive className="mt-3">
              <tbody>
                <tr>
                  <td>Order ID</td>
                  <td>{orderDetails.orderId}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{orderDetails.status}</td>
                </tr>
                <tr>
                  <td>Date</td>
                  <td>{orderDetails.date}</td>
                </tr>
                <tr>
                  <td>Total Amount</td>
                  <td>{orderDetails.totalAmount}</td>
                </tr>
                <tr>
                  <td>Payment Mode</td>
                  <td>{orderDetails.paymentMode}</td>
                </tr>
                <tr>
                  <td>Delivery Address</td>
                  <td>{orderDetails.deliveryAddress}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          
          {/* Button to go back or proceed */}
          <div className="text-center mt-4">
            <Button variant="primary" size="lg" href="/">Go to Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderSuccessPage;
