import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { FaTimesCircle } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/Loading';

const OrderFailurePage = () => {
  const { order, userData } = useContext(AppContext);
  const [deliveryAddress, setDeliveryAddress] = useState("");

  useEffect(() => {
    if (userData) {
      userData.listOfUserAdresses.forEach((x) => {
        if (x.addressId === order.addressId) {
          setDeliveryAddress(x.addressLine1 + ", " + x.addressLine2 + ", " + x.city);
        }
      });
    }
  }, [userData, order]);

  if (!userData || !order) {
    return <Loading />;
  }

  return (
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Failure Message */}
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="danger" className="text-center w-75 py-3">
              <FaTimesCircle size={50} className="mb-2" />
              <h4>Order Failed!</h4>
              <p>We encountered an issue while processing your order. Please try again or contact support.</p>
            </Alert>
          </div>


          {/* Buttons to Retry or Go Home */}
          <div className="text-center mt-4">
            <Button variant="warning" size="lg" href="/retry-order">Retry Order</Button>
            <Button variant="secondary" size="lg" href="/" className="ms-3">Go to Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFailurePage;
