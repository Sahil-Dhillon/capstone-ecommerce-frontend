import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Alert } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import Loading from '../../components/Loading';

const OrderSuccessPage = () => {
  const { order, userData } = useContext(AppContext);
  const [deliveryAddress, setDeliveryAddress] = useState("")
  useEffect(() => {
    if (userData) {

      userData.listOfUserAdresses.forEach((x) => {
        if (x.addressId == order.addressId) {
          setDeliveryAddress(x.addressLine1 + ", " + x.addressLine2 + ", " + x.city)
        }
      })
    }
  }, [userData, order])

  if (!userData) {
    return <Loading />
  }

  if (!order) {
    return <Loading />
  }
  if (order.orderStatus == "Successful") {

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
          <div className="text-center mt-4">
              <Button variant="primary" size="lg" href="/">Go to Home</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else if (order.orderStatus == "Invalid Quantities") {
    return(
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Failure Message */}
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="danger" className="text-center w-75 py-3">
              <FaTimesCircle size={50} className="mb-2" />
              <h4>Order Failed!</h4>
              <p>We are sorry, we are unable to process your order. Insufficient quantities available for some items in your cart.</p>
            </Alert>
          </div>
          {/* Buttons to Retry or Go Home */}
          <div className="text-center mt-4">
            {/* <Button variant="warning" size="lg" href="/C">Retry Order</Button> */}
            <Button variant="secondary" size="lg" href="/" className="ms-3">Go to Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
    )
  } else if (order.orderStatus == "Insufficient Balance") {
    return(
    <Container fluid className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Failure Message */}
          <div className="d-flex justify-content-center mb-4">
            <Alert variant="danger" className="text-center w-75 py-3">
              <FaTimesCircle size={50} className="mb-2" />
              <h4>Order Failed!</h4>
              <p>Oops! There's insufficient balance in your wallet.</p>
            </Alert>
          </div>
          {/* Buttons to Retry or Go Home */}
          <div className="text-center mt-4">
            {/* <Button variant="warning" size="lg" href="/C">Retry Order</Button> */}
            <Button variant="secondary" size="lg" href="/" className="ms-3">Go to Home</Button>
          </div>
        </Col>
      </Row>
    </Container>
    )
  }
};

export default OrderSuccessPage;
